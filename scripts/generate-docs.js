#!/usr/bin/env node

/**
 * ISMS文書自動生成ツール
 *
 * テンプレートから組織固有の文書一式を生成します。
 * プレースホルダー（{{組織名}} など）を設定ファイルの値で置換します。
 *
 * 使用方法:
 *   node scripts/generate-docs.js [config-file]
 *
 * 設定ファイルの例:
 *   organization.json または organization.yaml
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// デフォルトのプレースホルダー定義
const DEFAULT_PLACEHOLDERS = {
  組織名: '株式会社サンプル',
  ISMS責任者: '情報セキュリティ管理者',
  発効日: new Date().toISOString().split('T')[0],
  適用範囲: '本社全部門',
  承認者: '代表取締役',
  実施状況: '実施済',
  バージョン: '1.0',
  作成日: new Date().toISOString().split('T')[0],
  更新日: new Date().toISOString().split('T')[0]
}

// 色付きコンソール出力
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m'
}

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`)
}

/**
 * 設定ファイルを読み込む
 */
function loadConfig(configPath) {
  if (!configPath) {
    return DEFAULT_PLACEHOLDERS
  }

  const absolutePath = path.resolve(configPath)

  if (!fs.existsSync(absolutePath)) {
    log(`警告: 設定ファイルが見つかりません: ${absolutePath}`, 'yellow')
    log('デフォルト設定を使用します', 'yellow')
    return DEFAULT_PLACEHOLDERS
  }

  const content = fs.readFileSync(absolutePath, 'utf-8')
  const ext = path.extname(configPath).toLowerCase()

  if (ext === '.json') {
    return { ...DEFAULT_PLACEHOLDERS, ...JSON.parse(content) }
  } else if (ext === '.yaml' || ext === '.yml') {
    // 簡易的なYAMLパーサー（外部依存なし）
    const config = {}
    content.split('\n').forEach((line) => {
      const match = line.match(/^(\w+):\s*["']?(.+?)["']?\s*$/)
      if (match) {
        config[match[1]] = match[2]
      }
    })
    return { ...DEFAULT_PLACEHOLDERS, ...config }
  }

  throw new Error(`サポートされていないファイル形式: ${ext}`)
}

/**
 * プレースホルダーを置換する
 */
function replacePlaceholders(content, config) {
  let result = content

  for (const [key, value] of Object.entries(config)) {
    const placeholder = new RegExp(`\\{\\{${key}\\}\\}`, 'g')
    result = result.replace(placeholder, value)
  }

  return result
}

/**
 * ディレクトリを再帰的にコピーしてプレースホルダーを置換
 */
function processDirectory(srcDir, destDir, config) {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true })
  }

  const entries = fs.readdirSync(srcDir, { withFileTypes: true })
  let processedCount = 0

  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name)
    const destPath = path.join(destDir, entry.name)

    if (entry.isDirectory()) {
      processedCount += processDirectory(srcPath, destPath, config)
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      const content = fs.readFileSync(srcPath, 'utf-8')
      const processed = replacePlaceholders(content, config)
      fs.writeFileSync(destPath, processed, 'utf-8')
      processedCount++
    } else if (entry.isFile()) {
      // 非MDファイルはそのままコピー
      fs.copyFileSync(srcPath, destPath)
    }
  }

  return processedCount
}

/**
 * 使用方法を表示
 */
function showUsage() {
  console.log(`
ISMS文書自動生成ツール

使用方法:
  node scripts/generate-docs.js [options] [config-file]

オプション:
  --help, -h      このヘルプを表示
  --output, -o    出力ディレクトリを指定（デフォルト: ./output）
  --list          利用可能なプレースホルダーを表示

設定ファイル形式:
  JSON または YAML

設定ファイルの例 (organization.json):
  {
    "組織名": "株式会社サンプル",
    "ISMS責任者": "情報セキュリティ部長",
    "発効日": "2025-04-01",
    "適用範囲": "本社情報システム部門",
    "承認者": "代表取締役"
  }

設定ファイルの例 (organization.yaml):
  組織名: 株式会社サンプル
  ISMS責任者: 情報セキュリティ部長
  発効日: 2025-04-01
  適用範囲: 本社情報システム部門
  承認者: 代表取締役
`)
}

/**
 * プレースホルダー一覧を表示
 */
function showPlaceholders() {
  log('\n利用可能なプレースホルダー:\n', 'blue')

  const placeholders = [
    { name: '組織名', description: '正式な組織名称', example: '株式会社サンプル' },
    {
      name: 'ISMS責任者',
      description: 'ISMS管理責任者の役職/氏名',
      example: '情報セキュリティ部長'
    },
    { name: '発効日', description: '文書の発効日', example: '2025-04-01' },
    { name: '適用範囲', description: 'ISMSの適用範囲', example: '本社情報システム部門' },
    { name: '承認者', description: '文書承認者', example: '代表取締役' },
    { name: '実施状況', description: '管理策の実施状況', example: '実施済' },
    { name: 'バージョン', description: '文書バージョン', example: '1.0' },
    { name: '作成日', description: '文書作成日', example: '2025-01-01' },
    { name: '更新日', description: '文書更新日', example: '2025-01-15' }
  ]

  console.log('| プレースホルダー | 説明 | 例 |')
  console.log('|------------------|------|-----|')
  for (const p of placeholders) {
    console.log(`| \`{{${p.name}}}\` | ${p.description} | ${p.example} |`)
  }
  console.log()
}

/**
 * メイン処理
 */
function main() {
  const args = process.argv.slice(2)

  // ヘルプ表示
  if (args.includes('--help') || args.includes('-h')) {
    showUsage()
    process.exit(0)
  }

  // プレースホルダー一覧表示
  if (args.includes('--list')) {
    showPlaceholders()
    process.exit(0)
  }

  // 出力ディレクトリの取得
  let outputDir = './output'
  const outputIndex = args.indexOf('--output')
  if (outputIndex !== -1 && args[outputIndex + 1]) {
    outputDir = args[outputIndex + 1]
  }
  const outputIndexShort = args.indexOf('-o')
  if (outputIndexShort !== -1 && args[outputIndexShort + 1]) {
    outputDir = args[outputIndexShort + 1]
  }

  // 設定ファイルの取得（オプション以外の最後の引数）
  const configFile = args.filter((arg) => !arg.startsWith('-') && arg !== outputDir).pop()

  log('\n=== ISMS文書自動生成ツール ===\n', 'blue')

  // 設定読み込み
  const config = loadConfig(configFile)
  log('設定:', 'green')
  for (const [key, value] of Object.entries(config)) {
    console.log(`  ${key}: ${value}`)
  }
  console.log()

  // ソースディレクトリ
  const projectRoot = path.resolve(__dirname, '..')
  const srcDir = path.join(projectRoot, 'docs', 'isms')
  const destDir = path.resolve(outputDir)

  if (!fs.existsSync(srcDir)) {
    log(`エラー: ソースディレクトリが見つかりません: ${srcDir}`, 'red')
    process.exit(1)
  }

  log(`入力: ${srcDir}`, 'blue')
  log(`出力: ${destDir}`, 'blue')
  console.log()

  // 処理実行
  log('文書を生成中...', 'yellow')
  const count = processDirectory(srcDir, destDir, config)

  log(`\n完了: ${count}件のファイルを生成しました`, 'green')
  log(`出力先: ${destDir}`, 'green')
}

main()
