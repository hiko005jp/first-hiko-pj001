import Hero from "components/hero"
import Contact from "components/contact"
import {TwoColumn} from "components/two-contains"
import Image from "next/image"
import aboutImage from "images/about.jpg"
import Head from "next/head"
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'About',
  }

export default function About(){
    return(
        
        <>

        <Head>
            <title>About</title>
        </Head>
        
        <Hero title="About" subtitle="About development activities" imageOn = {false}  />

        <figure>
            <Image src={aboutImage} alt="" layout="responsive" sizes="(min-width: 1152px) 552px, 100vw" />
        </figure>

        <TwoColumn>
            <TwoColumn.main>
                <h2 className="text-2xl font-bold pb-4">ピレネーアイベックス</h2>
                <p className="leading-7">
                ピレネーアイベックスは現存するスペインアイベックスの亜種で、スペイン北部に生息していました。
                しかし狩猟が原因で絶滅したとされています。
                なお、2009年にDNAからクローン作成がされましたが、誕生から数分でなくなってしまったそうです。
                </p>

                <h2 className="text-2xl font-bold pt-8 pb-4">テイオウキツツキ</h2>
                <p className="leading-7">
                このキツツキは森林伐採などにより2003年に絶滅した世界最大のキツツキの一つとされていました。
                それに加えて、食用や民間療法を目的とした狩猟も行われてしまいました。
                </p>

                <h2 className="text-2xl font-bold pt-8 pb-4">ヨウスコウカワイルカ</h2>
                <p className="leading-7">
                ヨウスコウカワイルカは中国の長江に生息していたイルカです。
                河川や周辺地域の開発などを原因とした環境の悪化により徐々に数を減らし2006年に絶滅が宣言されました。
                </p>

                <h2 className="text-2xl font-bold pt-8 pb-4">サウジガゼル</h2>
                <p className="leading-7">
                サウジガゼルはクウェートなど中東の国に生息していたカモシカの仲間です。
                元々個体数は少なかったそうですが、食用やツノを目当てにした乱獲や森林の伐採により2008年に絶滅が宣言されました。
                </p>

                <h2 className="text-2xl font-bold pt-8 pb-4">クリスマスアブラコウモリ</h2>
                <p className="leading-7">
                クリスマスアブラコウモリはインド洋のクリスマス島に生息していた小型のコウモリです。
                人間が連れ込んだ犬や猫を始めとした動物からの捕食や病原菌、寄生虫、駆虫薬などにより死亡した個体が多いとされています。
                結果として2009年にオーストラリア政府から絶滅が宣言されました。
                </p>

                <h2 className="text-2xl font-bold pt-8 pb-4">ワキアカカイツブリ</h2>
                <p className="leading-7">
                ワキアカカイツブリはマダガスカルに生息していた鳥です。
                生息地の破壊や狩猟、多種との交雑などにより、生息数を減らし、2010年に絶滅が宣言されました。
                </p>

                <h2 className="text-2xl font-bold pt-8 pb-4">ピンタゾウガメ</h2>
                <p className="leading-7">
                ピンタゾウガメはガラパゴス諸島のピンタ島に分布していた大型のカメです。
                食用を目的とした乱獲やヤギによるの自然の破壊によって生息数が減少し、2012年に絶滅が宣言されました。
                </p>

                <h2 className="text-2xl font-bold pt-8 pb-4">ミヤココキクガシラコウモリ</h2>
                <p className="leading-7">
                ミヤココキクガシラコウモリは宮古島に生息していた比較的小型のコウモリです。
                絶滅した原因は正確にはわかっていませんが、森林の破壊によって絶滅したと言われており、2012年に絶滅とされました。
                </p>

                <h2 className="text-2xl font-bold pt-8 pb-4">ダイトウノスリ</h2>
                <p className="leading-7">
                ダイトウノスリは北大東島と南大東島のみに生息していたタカの仲間です。
                元々の生息数が少なかったこともありましたが、彼らが餌としていた小型の鳥が減少したことにより、2012年に絶滅が宣言されました。
                </p>

                <h2 className="text-2xl font-bold pt-8 pb-4">タイワンウンピョウ</h2>
                <p className="leading-7">
                タイワンウンピョウはかつて台湾に生息していた肉食のネコの仲間で全身が雲のような斑点で覆われています。
                ウンピョウは原始的な密林を好みますが、そのような森林が伐採されたことで、台湾の亜種は2013年に絶滅しました。
                </p>

                <h2 className="text-2xl font-bold pt-8 pb-4">ブランブルケイメロミス</h2>
                <p className="leading-7">
                ブランブルケイメロミスはブランブル・ケイというグレートバリアリーフの島にのみ生息する固有種でした。
                しかし、地球温暖化の影響で浸水などが発生し、生息地に大きな変化をもたらしたため、2016年に絶滅したと言われています。
                </p>

                <h2 className="text-2xl font-bold pt-8 pb-4">キタシロサイ</h2>
                <p className="leading-7">
                キタシロサイはアフリカに住んでいたサイで、亜種として南アフリカにもミナミシロサイが今も生息しています。
                内戦に加え、装飾品や薬として使われるツノを目的とした密猟によって急速に数を減らし、2018年に最後のオスが死亡したため事実上の絶滅を迎えました。
                </p>

                <h2 className="text-2xl font-bold pt-8 pb-4">スムース・ハンドフィッシュ</h2>
                <p className="leading-7">
                スムース・ハンドフィッシュは「泳げない魚」としても知られていた、オーストラリア南東部原産の魚です。
                絶滅の主な原因には乱獲、海水汚染、生息地の減少が挙げられます。
                </p>

                <h2 className="text-2xl font-bold pt-8 pb-4">ハシナガチョウザメ</h2>
                <p className="leading-7">
                ハシナガチョウザメは中国の河川に生息していた世界最大の淡水魚です。
                乱獲やダム建設による生息環境の悪化により2022年に絶滅が宣言されました。
                </p>
            </TwoColumn.main>
            <TwoColumn.sidebar>
                <Contact />
            </TwoColumn.sidebar>
        </TwoColumn>
        </>

    )
}