<div class="row">
<!--    <div class="col-xs-10 col-xs-offset-1 col-md-10 col-md-offset-1">-->
    <div class="col-md-4">

        <!-- Contents -->

        <div class="index">
            <h2>目次</h2>
            <div class="index-block">    
                <h3>全般</h3>
                <li><a href="#q1">WebRTCについて教えて欲しい</a></li>
                <li><a href="#q2">SkyWayについて教えて欲しい</a></li>
                <li><a href="#q3">HTML5ラボについて教えて欲しい</a></li>
                <li><a href="#q4">導入事例について教えて欲しい</a></li>
                <li><a href="#q5">利用するにはづすればよいか？</a></li>
                <li><a href="#q6">OpenStackとの関連は？</a></li>
                <li><a href="#q34">OpenStackの上で動いているのか？</a></li>
            </div>

            <div class="index-block"> 
                <h3>技術面</h3>
                <li><a href="#q7">従来のP2P技術との違いは何か？</a></li>
                <li><a href="#q8">P2Pでセキュリティをどう担保するのか？</a></li>
                <li><a href="#q9">ブラウザの対応状況は？</a></li>
                <li><a href="#q10">遅延はどのくらいか？</a></li>
                <li><a href="#q11">音質、画質はどのくらいか？</a></li>
                <li><a href="#q12">利用コーデックは？利用帯域は？</a></li>
                <li><a href="#q31">VP8とは？</a></li>
                <li><a href="#q32">VP9とは？</a></li>
                <li><a href="#q13">H264には対応していないのか？それはなぜか？</a></li>
            </div>

            <h3>デモ内容</h3>
            <li><a href="#q14">Romoの操作はどうやって実現しているのか？</a></li>
            <li><a href="#q15">無線で直接制御しているのか？</a></li>
            <li><a href="#q16">これをどうビジネスにするつもりなのか？</a></li>

            <h3>差別化要素、競合優位性</h3>
            <li><a href="#q17">SkyWayを利用するメリットは何か？</a></li>
            <li><a href="#q18">コンペティターは誰か？競合に対する優位性、御社の強みは？</a></li>
            <li><a href="#q33">競合に対する優位性、御社の強みは？</a></li>
            <li><a href="#q19">オープンソースで競合の模倣をどう防ぐつもりなのか？</a></li>
            <li><a href="#q20">内製で開発する理由は？</a></li>

            <h3>ビジネス戦略</h3>
            <li><a href="#q21">マネタイズはどのように行うつもりか？</a></li>
            <li><a href="#q22">有償化したら誰も使わないのではないか？</a></li>
            <li><a href="#q23">既存の商材との競合についてはどう考えているのか？</a></li>
            <li><a href="#q24">IoT分野でどうビジネスをしていくつもりか？</a></li>

            <h3>料金、SLA、保守、サポート</h3>
            <li><a href="#q25">法人での利用、商用での利用は可能か？</a></li>
            <li><a href="#q26">料金は発生するか？無償で利用可能か？</a></li>
            <li><a href="#q27">商用化、有償化の時期はいつか？</a></li>
            <li><a href="#q28">商用化、有償化時の料金はどのぐらいになるか？</a></li>
            <li><a href="#q29">SLAは存在するか？</a></li>
            <li><a href="#q30">保守、サポート体制はどのようになっているか？</a></li>
        </div>
    </div>

        <!-- Q&A Section -->
    <div class="col-md-8">
        <div class="content">
            <h3>全般 / General Questions</h3>
            
            <a id="q1"></a>
            <h4>Q. WebRTCについて教えて欲しい</h4>
            [スクリプトを参照](https://ghe.nttcloud.net/webcore-tu/notes/blob/master/projects/openstack-summit-2015/scripts.md)

            <a id="q2"></a>
            <h4>Q. SkyWayについて教えて欲しい</h4>
            [スクリプトを参照](https://ghe.nttcloud.net/webcore-tu/notes/blob/master/projects/openstack-summit-2015/scripts.md)

            <a id="q3"></a>
            <h4>Q. HTML5ラボについて教えて欲しい</h4>
            [スクリプトを参照](https://ghe.nttcloud.net/webcore-tu/notes/blob/master/projects/openstack-summit-2015/scripts.md)

            <a id="q4"></a>
            <h4>Q. 導入事例について教えて欲しい</h4>
            <li>妻鳥通信工業様が、SkyWayを用いて、ビデオ通話による問合せ機能をWebサイトに埋め込めるサービスを開発しております。</li>
            <li>金融大手様が、SkyWayを、社内向けのWeb会議サービスにご利用されています。</li>
            <li>日本科学未来館様が、このRomoを使って、離れた場所から子どもを見守るイベントを開催されました。</li>

            <h4>Q. Can you give some examples of SkyWay being used?</h4>
            <li>A company named Mendori (Menbird) has added video call functionality to it's contact portal, and is using SkyWay to support the technology.</li>
            <li>A large Japanese financial institution has introduced an internal webconferencing solution using SkyWay technology.</li>
            <li>Japan's National Museum of Emerging Science and Innovation (Miraikan) has held events to showcase using Romo as a solution to watch over children over long distances.</li>

            <a id="q5"></a>
            <h4>Q. 利用するにはどうすればよいか？</h4>
            <li>公式サイトからAPIキーを登録すれば利用できます。</li>
            <li>APIキー登録時、「ドメイン」を指定する際は以下にご注意下さい。</li>
                <ul>
                    <li>JavaScriptを利用する場合、お客様がご用意するWebサイトのドメインと同一にする</li>
                    <li>iOS/Androidを利用する場合、ソースコード上で同一の文字列を指定する</li>
                </ul>

            <a id="q6"></a>
            <h4>Q. OpenStackとの関連は？</h4>
            <li>OpenStackのモジュールアーキテクチャという特徴を生かして、OpenStackを、IaaSだけでなく、PaaSやIoT基盤にも活用していきます。</li>

            <h4>Q. What is SkyWay's connection to OpenStack?</h4>
            <li>Using the strengths of OpenStack's modular architecture, we are using it not just as an Iaas, but also as a PaaS and as an IoT foundation.</li>

            <a id="q34"></a>
            <h4>Q. OpenStackの上で動いているのか？</h4>
            <li>このデモシステムは、OpenStack上で動作しています。</li>
            <li>しかし、正式サービスとしてはまだ提供開始しておらず、現在検証中の段階です。</li>
            <li>サービスの提供時期は未定です。</li>

            <h4>Q. You're running upon OpenStack?</h4>
            <li>This demo is running upon OpenStack.</li>
            <li>However we have yet to roll this out to our official services.</li>
            <li>We have not yet determined when we will begin to offer this service.</li>




            <h3>技術面 / Technical Aspects</h3>
            
            <a id="q7"></a>
            <h4>Q. 従来のP2P技術との違いは何か？</h4>
            [スクリプトを参照](https://ghe.nttcloud.net/webcore-tu/notes/blob/master/projects/openstack-summit-2015/scripts.md)

            <a id="q8"></a>
            <h4>Q. P2Pでセキュリティをどう担保するのか？</h4>
            <li>P2P通信は全てSRTP, DTLSを用いて暗号化される為、盗聴等はできません。</li>

            <h4>Q. How are you ensuring that your P2P connections are secure?</h4>
            <li>P2P communication is always encrypted through SRTP and DTLS, so data transmission cannot be eavesdropped on by third parties.</li>

            <a id="q9"></a>
            <h4>Q. ブラウザの対応状況は？</h4>
            <li>Chrome, FireFox, OperaはWebRTCに対応済みです。</li>
            <li>IEは未対応ですが、後継ブラウザであるEdgeはWebRTCに対応する予定です。</li>
            <li>Safariは未対応で、対応予定は未定です。</li>
            <li>http://iswebrtcreadyyet.com/</li>

            <h4>Q. Which browsers are supported?</h4>
            <li>Chrome, Firefox and Opera are WebRTC ready.</li>
            <li>IE does not have WebRTC support, but the new Edge browser will in future support WebRTC.</li>
            <li>Safari remains unsupported, with future plans for support unknown.</li>
            <li>See http://iswebrtcreadyyet.com/</li>

            <a id="q10"></a>
            <h4>Q. 遅延はどのくらいか？</h4>
            <li>ネットワーク状況が良好であれば、同一WiFiネットワーク内なら数十ms程度、インターネット経由の場合、数百ms程度です。</li>
            <li>ネットワーク状況が劣悪な場合、秒単位の遅延が発生することもあります。</li>
            <li>NAT越えの為に中継サーバを経由する場合、遅延はさらに大きくなります。</li>

            <h4>Q. What communication delays are involved?</h4>
            <li>If the network condition is good, connections on the same network will be tens of ms, over the internet will be a few hundred of ms.</li>
            <li>If network conditions are bad, delays can reach seconds.</li>
            <li>In the case of crossing NATs through a STUN (intermediary) server, the delays can be larger.</li>

            <a id="q11"></a>
            <h4>Q. 音質、画質はどのくらいか？</h4>
            <li>音声はOpusというコーデックを使っており、帯域は6〜510Kbpsで可変です。</li>
            <li>ネットワークの状況に応じてアダプティブにビットレートを変更します。</li>
            <li>NW状況が悪ければ携帯電話並、NW状況が良ければMP3並の音質になります。</li>
            <li>最近、TwitCastingがopusを採用しました。高音質化でミュージシャンを取り込む狙いがあるそうです。</li>
            http://japan.cnet.com/news/service/35069805/
            http://japan.cnet.com/image/l/storage/35069805/storage/2015/09/02/d9e405eb3bdca786be43500936e7d37b/150902_t_01.jpg

            <li>映像はVP8というコーデックを使っており、帯域は100〜2000Kbpsで可変です。</li>

            <h4>Q. How good is the audio and video quality?</h4>
            <li>Audio uses a codec named "Opus", with bitrates in the range of 6~510Kbps.</li>
            <li>The bitrate can change to suit the network conditions.</li>
            <li>Bad network conditions are on the level of a mobile phone call, good network conditions have audio quality on par with MP3 files.</li>
            <li>Recently TwitCasting has adopted Opus. They are aiming to attract musicians through the high audio quality.</li>

            <li>Video uses the VP8 codec, with a bitrates in the range of 100~2000Kbps.</li>

            <a id="q12"></a>
            <h4>Q. 利用コーデックは？利用帯域は？</h4>
            <li>同上</li>

            <h4>Q. What codecs are being used? What bitrates do they offer?</h4>
            <li>See above.</li>

            <a id="q31"></a>
            <h4>Q. VP8とは？</h4>
            <li>VP8は、Googleが提供する、ロイヤリティフリーの動画コーデックです。</li>
            <li>高品質・高圧縮率のフォーマットとして最も普及が進んでいるのはH.264(MPEG-4)です。</li>
            <li>しかし、H.264規格はメーカの特許を含む為、ライセンス料が発生するという問題がありました。</li>
            <li>そこで、Googleはウェブブラウザ向けにVP8を無償で公開しました。</li>
            <li>http://gigazine.net/news/20140427-google-webm/</li>

            <h4>Q. What is VP8?</h4>
            <li>VP8 is a royalty-free video codec offered by Google.</li>
            <li>Currently the H.264 standard is popular, due to it's hgih quality and compression rate.</li>
            <li>H.264 incorporates patented technologies, and it's usage can therefore require license fee payments.</li>
            <li>Google released the royalty-free VP8 codec for the browser for this reason.</li>
            <li>http://gigazine.net/news/20140427-google-webm/</li>

            <a id="q32"></a>
            <h4>Q. VP9とは？</h4>
            <li>VP9はVP8の後継コーデックで、より高品質な映像コーデックです。</li>
            <li>VP8と比較すると、同じ画質でVP8の半分のビットレートを実現しています。</li>
            <li>ライバルであるH.264やH.265よりも効率の良いコーデックにすることを目指し開発されています。</li>
            <li>http://gigazine.net/news/20150407-youtube-vp9/</li>

            <h4>Q. What is VP9?</h4>
            <li>VP9 is the successor to VP8 with higher picture quality.</li>
            <li>With the same picture quality, the bitrate is halved in comparison to VP8.</li>
            <li>It is being developed as a more efficient alternative to rival H.264 and H.265 codecs.</li>
            <li>http://gigazine.net/news/20150407-youtube-vp9/</li>

            <a id="q13"></a>
            <h4>Q. H264には対応していないのか？それはなぜか？対応状況は？</h4>
            <li>WebRTC標準に採用されたのが最近であり、各ブラウザでの対応がまだ完了していないからです。</li>
            <li>高品質・高圧縮率のフォーマットとして最も普及が進んでいるのはH.264(MPEG-4)です。</li>
            <li>しかし、H.264規格はメーカの特許を含む為、ライセンス料が発生するという問題がありました。</li>
            <li>昨年(2014年)、CiscoがH.264コーデックをオープンソース化した事で、WebRTC標準にも採用されました。</li>
            <li>しかし、まだ全てのPC・モバイルブラウザでの対応は完了していない為、SkyWayでも現状未サポートです。</li>

            ```
            <li>FireFox     ：対応済み。但し、H.264を優先するようAPL側で設定が必要。</li>
            <li>Chrome      ：年内に対応する見込み</li>
            <li>IE/Safari   ：プラグインで対応しているものが存在</li>
            <li>iOS/Android ：ライブラリが対応済み</li>
            ```

            <h4>Q. H.264 is not supported? Why is that? What is the current level of support?</h4>
            <li>H.264 has recently been adopted by the WebRTC standard, but is not yet supported by every browser.</li>
            <li>Currently the H.264 standard is popular, due to it's hgih quality and compression rate.</li>
            <li>H.264 incorporates patented technologies, and it's usage can therefore require license fee payments.</li>
            <li>It was adopted by WebRTC after Cisco opensourced the standard last year.</li>
            <li>But due to lack of support in all PC & mobile browsers, H.264 is not yet supported by SkyWay.</li>

            ```
            <li>FireFox     ：Supported. However it is necessary to to set H.264 as preferred in the application-side settings.</li>
            <li>Chrome      ：Expected to be supported by the end of the year.</li>
            <li>IE/Safari   ：Some plugins offer support.</li>
            <li>iOS/Android ：Libraries offer support.</li>
            ```



            <h3>デモ内容 / Demo Contents</h3>
            
            <a id="q14"></a>
            <h4>Q. Romoの操作はどうやって実現しているのか？</h4>
            <li>WebRTCを使って、ハンドル操作を、PCのブラウザから、Romoに装着したiPhoneアプリに伝えます。</li>
            <li>iPhoneアプリがRomoを動かします。</li>
            <li>PCとiPhoneのカメラ映像もお互いに送信しています。</li>
            <li>最初にクラウド上のサーバがブラウザとiPhoneの通信を仲介した後は、ブラウザとiPhoneがPeer-to-Peerでdirectに通信します</li>

            <h4>Q. How are you controlling the Romo robots?</h4>
            <li>The controls from the steering wheel are communicated from the browser the iPhone app running on the Romo.</li>
            <li>The iPhone app controls the Romo.</li>
            <li>Camera feeds from both the PC and the iPhone are being sent to each other simultaneously</li>
            <li>Once the initial communication between browser and iPhone app has been negotiated by a server in the cloud, the browser and iPhone communicate directly over P2P.</li>

            <a id="q15"></a>
            <h4>Q. 無線で直接制御しているのか？</h4>
            <li>このデモでは、PCとiPhoneはWiFi経由で接続していますが、インターネット経由でどこからでも制御可能です。</li>

            <h4>Q. You're directly controlling Romo over Wifi?</h4>
            <li>In this demo the PC and iPhone are directly connected over Wifi, but it is also possible to control Romo over the internet.</li>

            <a id="q16"></a>
            <h4>Q. これをどうビジネスにするつもりなのか？</h4>
            <li>検討中です。</li>

            <h4>Q. How do you plan to use this for business?</h4>
            <li>We are currently considering this.</li>



            <h3>差別化要素、競合優位性 / Differentiatial Elements, Competitive Advantages</h3>

            <a id="q17"></a>
            <h4>Q. SkyWayを利用するメリットは何か？</h4>
            <h4>Q. What are the merits of using SkyWay?</h4>
            [スクリプトを参照](https://ghe.nttcloud.net/webcore-tu/notes/blob/master/projects/openstack-summit-2015/scripts.md)
            <a id="q18"></a>
            <h4>Q. コンペティターは誰か？</h4>
            <li>WebRTCサービスとしては、先行者であるAT&T、Tokbox、Twillioなどが競争相手です。</li>
            <li>クラウドサービスとしては、Amazon, Verizon, AT&Tなどが競争相手です。</li>

            <h4>Q. Who are your competitors?</h4>
            <li>As a WebRTC service; AT&T, Tokbok, Twillio are our main competitors.</li>
            <li>As a cloud service, we compete with Amazon, Verizon and AT&T.</li>

            <a id="q33"></a>
            <h4>Q. 競合に対する優位性、御社の強みは？</h4>
            <li>我々の強みに関しては、我々は、</li>
              - 通信キャリアやISP向けのTier1 IPバックボーンネットワークの提供者であり、</li>
              - 日本最大のISP(OCN)であり、</li>
              - 日本最大の電話サービス事業者です。</li>
            <li>これらの、世界でも有数のネットワーク・テレコム事業者としての経験、実績、知名度、技術力が、我々の強みです。</li>
            <li>WebRTC分野においても、国内ではトップレベルの実績と知名度を持っています。</li>
            <li>クラウドサービスとしては、VPNへの接続が無料であること、ウィルス対策や仮想パッチ等のセキュリティ機能などが強みです。</li>


            <li>競合最大手のOpenTokと比較して、以下のメリットがあります。</li>
              - MediaChannel（音声・映像）だけでなく、DataChannel（データ）にも対応</li>
              - サーバが日本にある為、接続が高速</li>
              - 日本語でのサポートが可能</li>

            <h4>Q. What advantages do your have over the competition? Or, what are your companies strengths?</h4>
            <li>Are strengths are:</li>
              - We offer a Tier1 IP backbone network for network carriers and ISPs,</li>
              - We own Japan's largest ISP (OCN),</li>
              - We are Japan's largest telephone service operator</li>
            <li>Even on the global stage, our experience, track record, name recognition, technical capabilities position us as a leading network telecom operator.</li>
            <li>Even in the field of WebRTC, our experience and recognition is domestically very highly regarded.</li>
            <li>As a cloud service, our free VPN connections, antivirus and virtual patch security functionality are our strengths.</li>

            <a id="q19"></a>
            <h4>Q. オープンソースで競合の模倣をどう防ぐつもりなのか？</h4>
            <li>現在の提供機能はベーシックな物である為、オープンソースで開発を進めてきました。</li>
            <li>今後、コアコンピタンス部分は非公開で権利化する等の戦略を検討しています。</li>

            <h4>Q. How do you plan to mitigate against imitation due to your open sourced nature?</h4>
            <li>Our present functionality is currently basic, and has therefore been developed opensource.</li>
            <li>We are considering adopting the tactic of privately developing future competitive features.</li>

            <a id="q20"></a>
            <h4>Q. 内製で開発する理由は？</h4>
            <li>理由は様々あるが、開発スピードがひとつの理由です。</li>
            <li>市場環境変化が速い現在、スピーディな開発と迅速な改善の繰り返しが重要です。</li>
            <li>外注の場合、RFP、価格交渉等のプロセスが開発スピードを遅らせる恐れがあります。</li>

            <h4>Q. Why did you develop internally?</h4>
            <li>One reason is because the speed of developing internally.</li>
            <li>In the currently rapidly changing market environment, having rapid development and improvement is necessary.</li>
            <li>With outsourcing the processes of negotiating prices, RFP etc can significantly slow development speed and reduce maneuverability.</li>

            <h3>ビジネス戦略 / Business Strategy</h3>
            
            <a id="q21"></a>
            <h4>Q. マネタイズはどのように行うつもりか？</h4>
            <li>検討中です。</li>

            <h4>Q. How do you plan to monetise SkyWay?</h4>
            <li>We are currently considering this.</li>

            <a id="q23"></a>
            <h4>Q. 既存の商材との競合についてはどう考えているのか？</h4>
            <li>検討中です。</li>

            <h4>Q. In what ways are you thinking about competiting with existing products.</h4>
            <li>We are currently considering this.</li>

            <a id="q24"></a>
            <h4>Q. IoT分野でどうビジネスをしていくつもりか？</h4>
            <li>検討中です。</li>

            <h4>Q. How do you plan to do business in the field of IoT?</h4>
            <li>We are currently considering this.</li>




            <h3>料金、SLA、保守、サポート / Fees, SLA, Maintenance, Support</h3>

            <a id="q25"></a>
            <h4>Q. 法人での利用、商用での利用は可能か？</h4>
            <li>はい、可能です。</li>
            <li>しかし、SkyWayは現在トライアルサービスという位置付けで提供しています。</li>
            <li>商用化については現在検討中で、一部の機能は有償化する可能性があります。</li>

            <h4>Q. Is it possible for corporations to use SkyWay, or to use it for commertial purposes?</h4>
            <li>Yes, it is possible.</li>
            <li>However we are currently offering SkyWay as a trial service.</li>
            <li>We are currently considering the commercialisation of SkyWay, and may charge for some features in future.</li>

            <a id="q26"></a>
            <h4>Q. 料金は発生するか？無償で利用可能か？</h4>
            <li>無償でご利用頂けます。</li>
            <li>しかし、SkyWayは現在トライアルサービスという位置付けで提供しています。</li>
            <li>商用化については現在検討中で、一部の機能は有償化する可能性があります。</li>

            <h4>Q. Are the fees for using SkyWay? Can I use it royalty-free?</h4>
            <li>SkyWay is offered royalty-free.</li>
            <li>However we are currently offering SkyWay as a trial service.</li>
            <li>We are currently considering the commercialisation of SkyWay, and may charge for some features in future.</li>

            <a id="q27"></a>
            <h4>Q. 商用化、有償化の時期はいつか？</h4>
            <li>未定です。現在検討中です。お伝えできる確定情報はございません。</li>
            <li>商用サービスにSkyWayをご利用頂く事は可能です。無償でご利用頂けます。</li>

            <h4>Q. When do you plan to commercialise SkyWay?</h4>
            <li>This is currently under consideration and has yet to be decided. We cannot confirm any details about this at present.</li>
            <li>it is possible to use SkyWay in a commercial service. There are no costs for doing this.</li>

            <a id="q28"></a>
            <h4>Q. 商用化、有償化時の料金はどのぐらいになるか？</h4>
            <li>未定です。現在検討中です。現時点でお伝えできる確定情報はございません。</li>
            <li>競合他社の同種のサービスで有償提供されているものがあります。</li>
            <li>しかし、同じ料金体系になるかは不明です。</li>

            <h4>Q. How much do you plan to charge for future commericalised components of SkyWay?</h4>
            <li>This is currently under considerationd and is undetermined.  We cannot confirm any details about this at present.</li>
            <li>Some of our competitors offer similar services for a price.</li>
            <li>However, we have not yet determined whether we will use a similar price structure.</li>

            <a id="q29"></a>
            <h4>Q. SLAは存在するか？</h4>
            <li>トライアルサービスのため、 SLAは存在しません。</li>
            <li>商用化時には変更になる可能性がありますが、現時点でお伝えできる確定情報はございません。</li>

            <h4>Q. Do you have SLAs?</h4>
            <li>As SkyWay is presently a trial service, there are no SLAs presently in place.</li>
            <li>This may change when SkyWay is commercialised, but we cannot confirm any details about this at present.</li>

            <a id="q30"></a>
            <h4>Q. 保守、サポート体制はどのようになっているか？</h4>
            <li>平日日勤帯での対応となります。</li>
            <li>商用化時には変更になる可能性がありますが、現時点でお伝えできる確定情報はございません。</li>

            <h4>Q. What maintenance or support systems do you have in place?</h4>
            <li>We correspond with support enquiries during working hours (on weekdays).</li>
            <li>This may change when SkyWay is commercialised, but we cannot confirm any details about this at present.</li>
        </div>
            
    </div>
</div>