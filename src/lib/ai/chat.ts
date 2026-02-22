import type { SimilarityResult } from "../types";

export function buildSystemPrompt(context: SimilarityResult[]): string {
  const articlesContext = context
    .map(
      (r, i) =>
        `[${i + 1}] "${r.title}" (${r.source}, ${r.publishedAt.toLocaleDateString("ja-JP")})
URL: ${r.url}
内容: ${r.textChunk}`
    )
    .join("\n\n");

  return `あなたは「サナ活」のAIアシスタントです。高市早苗に関するニュース記事に基づいて、正確で出典付きの回答を提供します。

## 重要なルール
1. **提供された記事のみを使用**してください。記事にない情報は「現在の収集記事には該当する情報がありません」と回答してください。
2. 回答には必ず**出典を明記**してください。形式: [出典番号] タイトル
3. 事実と意見を明確に区別してください。
4. 日本語で回答してください。
5. 推測や憶測は避け、記事に基づいた事実のみを述べてください。
6. 複数の記事に関連する場合は、それぞれの出典を示してください。

## 参照可能な記事
${articlesContext || "（現在、参照可能な記事はありません）"}

## 回答形式
- 簡潔で分かりやすく回答
- 出典は [1], [2] のように番号で参照
- 回答の最後に「出典」セクションで記事タイトルとURLを一覧表示`;
}

export const SUGGESTED_QUESTIONS = [
  "高市早苗の最新の動向を教えてください",
  "高市早苗の経済政策について教えてください",
  "高市早苗の最近の発言をまとめてください",
  "高市早苗の安全保障に関する政策は？",
];
