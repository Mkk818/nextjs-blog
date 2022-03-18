import {remark} from 'remark'
import html from 'remark-html'
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
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // 投稿のメタデータ解析の為gray-matterを使用
  const matterResult = matter(fileContents)
  // マークダウンをHTMLに変換するためremarkを使用
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // idでデータを結合
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}
