---
title: ファイルのレビューとマージ
description: ダンスファイルのアップロード後のレビューとマージプロセスについて理解する
keywords: ダンスファイル, レビュー, マージ, プロセス
icon: user-magnifying-glass
---

# ファイルのレビューとマージプロセス

この記事では、ダンスファイルのアップロード後のレビューとマージプロセスについて説明します。これには、GitHub Issueの作成、自動チェック、PRの生成、最終的なダンスマーケットリストの更新が含まれます。

## GitHub Issueの作成とチェック

<Steps>
  <Step title="自動的にIssueを作成">
    ダンスファイルのアップロードが完了すると、システムは自動的に [lobe-vidol-market](https://github.com/lobehub/lobe-vidol-market) リポジトリに新しいIssueを作成し、現在のダンスファイルの情報を含めます。
  </Step>
  <Step title="ラベルの追加">
    新しく作成されたIssueには自動的に `💃 Dance PR` ラベルが追加されます。
  </Step>
  <Step title="自動チェック">
    システムはIssueの内容がパラメータの規範に合致しているかどうかを自動的にチェックします。
  </Step>
  <Step title="チェック結果">
    - チェックが通過した場合、Issueには `✅ Auto Check Pass` ラベルが追加されます。
    - チェックが失敗した場合、`💃 Dance PR` ラベルは削除されます。エラーメッセージに従ってIssueの内容を修正し、手動で `💃 Dance PR` ラベルを再追加して再チェックをトリガーする必要があります。
  </Step>
</Steps>

<Frame>
  <img src="https://oss.vidol.chat/dance-manual-github-issue.png" alt="GitHub Issueの例" />
</Frame>

## GitHub PRの生成とマージ

<Steps>
  <Step title="PRの生成">
    Issueのチェックが通過した後、システムはIssueの内容に基づいて自動的にPull Request (PR)を生成します。
  </Step>
  <Step title="レビュー待ち">
    PRが生成された後、管理者によるレビューとマージをお待ちください。
  </Step>
</Steps>

<Frame>
  <img src="https://oss.vidol.chat/dance-manual-pr.png" alt="GitHub PRの例" />
</Frame>

## ダンスマーケットリストの更新

<Steps>
  <Step title="自動ビルド">
    PRがマージされた後、システムは自動的にビルドコマンドを実行し、更新された[ダンスリスト](https://vidol-market.lobehub.com/dances/index.json)の静的データを生成します。
  </Step>
  <Step title="マーケットの更新">
    LobeVidolは最新のダンスリストデータを読み込み、ダンスマーケットに更新された内容を表示します。
  </Step>
</Steps>

<Frame>
  <img src="https://oss.vidol.chat/dance-manual-list.png" alt="ダンスマーケットリストの例" />
</Frame>

