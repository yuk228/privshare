import Link from "next/link";
import BlogList from "@/components/blogs/MainBlogList";
import { LockKeyhole } from "lucide-react";
import { CircleDollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {
  return (
    <main className="px-5 py-[60px] md:px-30 lg:px-60">
      <div className="pt-10">
        <h2 className="text-3xl font-bold">Learn About Anonymity / Privacy</h2>
        <div className="py-5">
          <p>PrivShareは匿名性 / プライバシーに関する知識を無償で提供します。</p>
          <p>※このWebsiteは開発段階です。デザインの欠陥やサービスが正常に作動しない場合があります。</p>
          <p>記事内容の追加、詳しい説明、参考文献等は随時追加予定です。</p>
        </div>
      </div>
      <div className="flex gap-4">
        <Button><Link href="/blogs/iphone">Get Started</Link></Button>
        <NavigationMenu>
          <Link href="/contact" legacyBehavior passHref><NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact us</NavigationMenuLink></Link>
        </NavigationMenu>
      </div>
      <div>
        <div className="text-left lg:text-center text-4xl py-10">
          <h2 className="flex items-center justify-center"><span className="mr-2"><LockKeyhole size={40}/></span>あなたのデータを守る方法</h2>
        </div>
        <div>
          <BlogList />
        </div>
      </div>
      <div className="py-10">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Q. なぜプライバシー保護は重要ですか？</AccordionTrigger>
            <AccordionContent>A. あなたの情報が不正に利用されるのを防ぐために重要です。</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Q. PrivShareは誰のためにありますか?</AccordionTrigger>
            <AccordionContent>A. PrivShareはプライバシーに懸念を抱いている学生, 社会人, ジャーナリスト, 環境活動家, 社会人, 全ての人のためにあります。</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Q. 無料で使用可能ですか？</AccordionTrigger>
            <AccordionContent>A. はい。人種, 国, 性別, 役職を問わず全ての人が無料で使用可能です。</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="text-left lg:text-center text-4xl py-10">
        <h2 className="flex items-center justify-center"><span className="mr-2"><CircleDollarSign size={40}/></span>私たちを支援したいですか？</h2>
      </div>
      <div className="mb-[100px]">
        <p>私たちは無償でサイトの作成, 運営をしています。</p>
        <p></p>
        <p># 寄付機能はまだ実装されていません #</p><br />
      </div>
    </main>
  );
}