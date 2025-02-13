import React from 'react'

export default async function Home() {
    return (
    <div className="px-5 py-[100px] md:px-30 lg:px-60">
        <h2 className="text-3xl font-bold">Privacy Policy</h2>
        <p className="pt-2">Last updated: February 12, 2025 </p>
        <div>
            <h2 className="text-2xl font-bold py-4">ポリシーの概要</h2>
            <p>PrivShare、(以下「私たち」)の基本的な目的はプライバシーに関する知識を共有するためであり、非営利で運営されています。<br />
               私たちはユーザーが匿名のままでサービスを利用する事を望んでおり、決してユーザーのデータを保存しません。<br />
               例外として、サポート、問題の報告をした場合は一時的に個人情報を処理しますが、不要なデータは最大3ヶ月以内に完全に削除されます。<br />
               データは暗号化され、運営者以外がアクセスできないよう最善を尽くします。</p>
        </div>
        <div>
            <h2 className="text-2xl font-bold py-4">個人データの処理</h2>
            <p>私たちがユーザーのデータの使用、保存をする際は以下の場合に限ります。</p>
            <ul>
                <li>
                    <h2 className="text-xl font-bold py-2">＞ユーザー言語の取得</h2>
                    <p className="px-2">ユーザーがサービスを利用しやすいように、ユーザーの言語設定を一時的に利用します。<br />
                       私たちはユーザーのリクエストヘッダーに含まれるAccept-Languageを使用します。
                       このデータは保存されません。</p>
                </li>
                <li>
                    <h2 className="text-xl font-bold py-2">＞サポートと問題報告</h2>
                    <p className="px-2">ユーザーが私たちに意見があったり、問題を報告したりする場合、ユーザーが送信した情報及び、メールアドレスが一時的に保存されます。<br />
                       メールアドレスは1ヶ月以内に永久に削除され、ユーザーが送信した内容(意見、問題内容等の情報)は3ヶ月間アーカイブされた後、永久に削除されます。</p>
                </li>
                <li>
                    <h2 className="text-xl font-bold py-2">＞Cookie</h2>
                    <p className="px-2">PrivShareではCookieを使用しません。</p>
                </li>
                <li>
                    <h2 className="text-xl font-bold py-2">＞第三者への提供</h2>
                    <p className="px-2">私たちはユーザーの情報をいかなる場合においても、第三者に提供しません。<br />
                       これは法執行機関・公的機関からの申請においても含まれます。私たちは個人の特定につながる情報を一切保存しないため、彼らが必要とするであろうデータは存在しません。<br />
                       したがって、情報の提供は不必要です。<br />
                       例外として、サポートや問題報告の場合に限り、ユーザーが送信した情報、メールアドレスをPrivShare運営グループ内に限り共有される可能性があります。</p>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="text-2xl font-bold py-4">更新情報</h2>
            <p className="">このプライバシーポリシーは変更されることがあり、変更時はPrivShareトップページに通知されます。</p>
        </div>
    </div>
      )
}