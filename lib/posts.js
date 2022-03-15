import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
  // /posts内のファイル名を取得
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // idを取得するために拡張子(.md)を削除
    const id = fileName.replace(/\.md$/, '')

    // マークダウンファイルを文字列として読み込む
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // 投稿のメタデータ解析の為gray-matterを使用
    const matterResult = matter(fileContents)

    // idでデータを結合
    return {
      id,
      ...matterResult.data
    }
  })
  // 投稿を日付で並び替え
  return allPostsData.sort(({date:a}, {date:b}) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}