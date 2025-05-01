"use client"

import {
    Activity,
    BarChart3,
    Command,
    Cpu,
    Database,
    Globe,
    LineChart,
    type LucideIcon,
    MessageSquare,
    Settings,
    Shield,
    Terminal,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { NewsFeedTable } from "@/components/NewsFeedTable"
import ChatSection from "@/components/chat-interface/chat"


export default function Dashboard() {

    const apiData = {
        "data": [
            {
                "name": "Bitcoin",
                "symbol": "BTC",
                "roi": {
                    "24h": -0.137502900997395,
                    "7d": 0.580906638972268,
                    "30d": 15.6140386236956,
                    "YTD": 1.52955150998726,
                    "1y": 49.9309928765864
                }
            },
            {
                "name": "Ethereum",
                "symbol": "ETH",
                "roi": {
                    "24h": -0.930008256224962,
                    "7d": 0.300055340730388,
                    "30d": 0.0294134376782964,
                    "YTD": -45.8062442110442,
                    "1y": -43.0385103715334
                }
            },
            {
                "name": "Tether",
                "symbol": "USDT",
                "roi": {
                    "24h": -0.00853787694245483,
                    "7d": 0.0151927568354879,
                    "30d": 0.0352613939673851,
                    "YTD": 0.228271586035358,
                    "1y": -0.00990727566184199
                }
            },
            {
                "name": "XRP",
                "symbol": "XRP",
                "roi": {
                    "24h": -2.51811223232133,
                    "7d": -1.36387198739683,
                    "30d": 7.87135722206987,
                    "YTD": 7.17433135099427,
                    "1y": 336.353170927895
                }
            },
            {
                "name": "BNB",
                "symbol": "BNB",
                "roi": {
                    "24h": -1.0106269493459,
                    "7d": -2.39367034382445,
                    "30d": 1.26643731716594,
                    "YTD": -13.8467567182725,
                    "1y": 0.798791599432034
                }
            },
            {
                "name": "Solana",
                "symbol": "SOL",
                "roi": {
                    "24h": -1.33647192616453,
                    "7d": -3.43185318300233,
                    "30d": 16.4024215478382,
                    "YTD": -22.2323882255143,
                    "1y": 8.39824002323504
                }
            },
            {
                "name": "USDC",
                "symbol": "USDC",
                "roi": {
                    "24h": -0.00592419296798999,
                    "7d": 0.0096089911960742,
                    "30d": -0.00875397962455532,
                    "YTD": 0.0116802631913854,
                    "1y": -0.0404204488532927
                }
            },
            {
                "name": "Dogecoin",
                "symbol": "DOGE",
                "roi": {
                    "24h": -2.94913355306801,
                    "7d": -4.52204631279555,
                    "30d": 6.50085257635471,
                    "YTD": -44.6984626763839,
                    "1y": 22.3983307875823
                }
            },
            {
                "name": "Cardano",
                "symbol": "ADA",
                "roi": {
                    "24h": -2.2375608663324,
                    "7d": -0.837804394087807,
                    "30d": 7.64478368095153,
                    "YTD": -17.4697556425853,
                    "1y": 53.9669160444867
                }
            },
            {
                "name": "TRON",
                "symbol": "TRX",
                "roi": {
                    "24h": -1.32623353542726,
                    "7d": -1.19958065855763,
                    "30d": 5.10943090081949,
                    "YTD": -4.04711245666654,
                    "1y": 102.393275859218
                }
            },
            {
                "name": "Lido Staked Ether",
                "symbol": "STETH",
                "roi": {
                    "24h": -0.925262195418851,
                    "7d": 0.489407031389144,
                    "30d": 0.143654466176956,
                    "YTD": -45.8555789177416,
                    "1y": -42.9950843183911
                }
            },
            {
                "name": "Wrapped Bitcoin",
                "symbol": "WBTC",
                "roi": {
                    "24h": -0.214114937346454,
                    "7d": 0.624628386047757,
                    "30d": 15.7091155175898,
                    "YTD": 1.69027000596945,
                    "1y": 49.8927558717394
                }
            },
            {
                "name": "Sui",
                "symbol": "SUI",
                "roi": {
                    "24h": -1.20466371546857,
                    "7d": 20.8838186888485,
                    "30d": 57.9221503740631,
                    "YTD": -13.2315171797467,
                    "1y": 206.353050725497
                }
            },
            {
                "name": "Chainlink",
                "symbol": "LINK",
                "roi": {
                    "24h": -4.05727553650408,
                    "7d": -1.60639688878722,
                    "30d": 10.0025620020255,
                    "YTD": -27.1517171701059,
                    "1y": 4.35666358186686
                }
            },
            {
                "name": "Avalanche",
                "symbol": "AVAX",
                "roi": {
                    "24h": -2.58950849208723,
                    "7d": -5.77889869397656,
                    "30d": 16.2031986894467,
                    "YTD": -39.4093987711497,
                    "1y": -37.9427886007698
                }
            },
            {
                "name": "Stellar",
                "symbol": "XLM",
                "roi": {
                    "24h": -1.79544444180823,
                    "7d": 2.55914302433799,
                    "30d": 6.14140088743428,
                    "YTD": -16.5340075340945,
                    "1y": 148.42698144968
                }
            },
            {
                "name": "Unus Sed Leo",
                "symbol": "LEO",
                "roi": {
                    "24h": 1.55417521850489,
                    "7d": -0.352666679031584,
                    "30d": -0.792318079271297,
                    "YTD": 0.366729689991233,
                    "1y": 55.0759550120178
                }
            },
            {
                "name": "Toncoin",
                "symbol": "TON",
                "roi": {
                    "24h": -1.85441387370735,
                    "7d": 3.55329948106692,
                    "30d": -17.4358064665069,
                    "YTD": -41.3543793211889,
                    "1y": -40.1961355785781
                }
            },
            {
                "name": "Shiba Inu",
                "symbol": "SHIB",
                "roi": {
                    "24h": -3.36721409151996,
                    "7d": -3.07597851354519,
                    "30d": 10.1801489156218,
                    "YTD": -36.8050152450271,
                    "1y": -43.9869716430224
                }
            },
            {
                "name": "Hedera Hashgraph",
                "symbol": "HBAR",
                "roi": {
                    "24h": -2.54427262949883,
                    "7d": -0.685876872834101,
                    "30d": 16.3218221727537,
                    "YTD": -30.7819615118769,
                    "1y": 85.1918328650364
                }
            }
        ]
    }

    const articles = {
        "metadata": {
            "page": 1,
            "limit": 10,
            "total": 0,
            "totalRows": 0,
            "totalPages": 0,
            "hasMore": false
        },
        "articles": [
            {
                "title": "Grayscale Urges SEC to Approve Ethereum Staking for ETFs Managing $8.1B; VanEck CEO Hopes for Solana ETF Approval",
                "publishTime": 1746000311000,
                "source": "The Defiant",
                "assets": [
                    "Solana",
                    "Ethereum"
                ],
                "url": "https://thedefiant.io/news/regulation/grayscale-urges-sec-to-approve-ethereum-staking-etfs-managing-8-1b-vaneck-ceo-a8f72e39"
            },
            {
                "title": "Tether flashes mixed signals as Bitcoin sees green - What should you do?",
                "publishTime": 1746000054000,
                "source": "AMBCrypto",
                "assets": [
                    "Ethereum",
                    "Bitcoin",
                    "Tether"
                ],
                "url": "https://ambcrypto.com/tether-flashes-mixed-signals-as-bitcoin-sees-green-what-should-you-do"
            },
            {
                "title": "De-Dollarization: 5 Oil Giants Now Settling in Yuan, Not USD",
                "publishTime": 1746000000000,
                "source": "Watcher Guru",
                "url": "https://watcher.guru/news/de-dollarization-5-oil-giants-now-settling-in-yuan-not-usd"
            },
            {
                "title": "Appian verkündet die Gewinner der Innovation Awards 2025",
                "publishTime": 1746000000000,
                "source": "PR Newswire",
                "url": "https://www.prnewswire.com/news-releases/appian-verkundet-die-gewinner-der-innovation-awards-2025-302442026.html"
            },
            {
                "title": "How Much Would $1,000 Invested in XRP in 2018 Be Worth Today?",
                "publishTime": 1745999868000,
                "source": "CryptoPotato",
                "assets": [
                    "XRP"
                ],
                "url": "https://cryptopotato.com/how-much-would-1000-invested-in-xrp-in-2018-be-worth-today/"
            },
            {
                "title": " Banks must adopt crypto or be extinct in 10 years, Eric Trump says ",
                "publishTime": 1745999516000,
                "source": "CoinTelegraph",
                "assets": [
                    "Bitcoin"
                ],
                "url": "https://cointelegraph.com/news/bank-must-adopt-crypto-or-be-extinct-eric-trump?utm_source=rss_feed&utm_medium=rss&utm_campaign=rss_partner_inbound"
            },
            {
                "title": "SEC ends investigation into PayPal’s PYUSD stablecoin without enforcement",
                "publishTime": 1745998880000,
                "source": "The Block",
                "assets": [
                    "United States Dollar",
                    "USDC",
                    "Solana",
                    "PayPal USD",
                    "Tether"
                ],
                "url": "https://www.theblock.co/post/352504/sec-ends-investigation-into-paypals-pyusd-stablecoin-without-enforcement?utm_source=rss&utm_medium=rss"
            },
            {
                "title": "BlackRock Head of Digital Assets on Bitcoin ETFs: ‘The flows are back in a big way’",
                "publishTime": 1745998631000,
                "source": "The Block",
                "assets": [
                    "Bitcoin"
                ],
                "url": "https://www.theblock.co/post/352485/blackrock-head-of-digital-assets-on-bitcoin-etfs-the-flows-are-back-in-a-big-way?utm_source=rss&utm_medium=rss"
            },
            {
                "title": "Silicon Motion Announces Results for the Period Ended March 31, 2025",
                "publishTime": 1745998560000,
                "source": "PR Newswire",
                "url": "https://www.prnewswire.com/news-releases/silicon-motion-announces-results-for-the-period-ended-march-31-2025-302442394.html"
            },
            {
                "title": "Libre Launches $500 Million Telegram Debt Tokenization Fund on TON With Accredited Investor Access",
                "publishTime": 1745998511000,
                "source": "The Defiant",
                "assets": [
                    "Toncoin"
                ],
                "url": "https://thedefiant.io/news/defi/libre-launches-500-million-telegram-debt-tokenization-fund-on-ton-accredited-b78170eb"
            }
        ]
    }

    return (
        <div
           className="flex flex-col "
        >
            <div className="container mx-auto p-1 relative z-10 flex-1 flex max-h-[calc(100vh-5rem)]">
                <div className="grid grid-cols-12 gap-6 flex-1">
                    {/* Sidebar */}
                    <div className="col-span-12 md:col-span-3 lg:col-span-2 ">
                        <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm h-full">
                            <CardContent className="p-4">
                                <nav className="space-y-2">
                                    <NavItem icon={Command} label="Dashboard" active />
                                    <NavItem icon={Activity} label="Diagnostics" />
                                    <NavItem icon={Database} label="Data Center" />
                                    <NavItem icon={Globe} label="Network" />
                                    <NavItem icon={Shield} label="Security" />
                                    <NavItem icon={Terminal} label="Console" />
                                    <NavItem icon={MessageSquare} label="Communications" />
                                    <NavItem icon={Settings} label="Settings" />
                                </nav>

                                <div className="mt-8 pt-6 border-t border-slate-700/50">
                                    <div className="text-xs text-slate-500 mb-2 font-mono">SYSTEM STATUS</div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>


                    {/* Main dashboard */}
                    <div className="col-span-12 md:col-span-9 lg:col-span-7  max-h-[calc(100vh-5rem)]">
                        <div className="grid ">
                            {/* System overview */}
                            <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm ">
                                <CardHeader className="border-b border-slate-700/50 pb-3 ">
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="text-slate-100 flex items-center">
                                            <Activity className="mr-2 h-5 w-5 text-cyan-500" />
                                            Arrakas AI
                                        </CardTitle>
                                        <div className="flex items-center space-x-2">
                                            <Badge variant="outline" className="bg-slate-800/50 text-cyan-400 border-cyan-500/50 text-xs">
                                                <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 mr-1 animate-pulse"></div>
                                                LIVE
                                            </Badge>
                                        </div>
                                    </div>
                                </CardHeader>

                                <ChatSection />
                            </Card>

                        </div>
                    </div>
                    {/* <CardContent className="p-6">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <MetricCard
                                            title="CPU Usage"
                                            value={cpuUsage}
                                            icon={Cpu}
                                            trend="up"
                                            color="cyan"
                                            detail="3.8 GHz | 12 Cores"
                                        />
                                        <MetricCard
                                            title="Memory"
                                            value={memoryUsage}
                                            icon={HardDrive}
                                            trend="stable"
                                            color="purple"
                                            detail="16.4 GB / 24 GB"
                                        />
                                        <MetricCard
                                            title="Network"
                                            value={networkStatus}
                                            icon={Wifi}
                                            trend="down"
                                            color="blue"
                                            detail="1.2 GB/s | 42ms"
                                        />
                                    </div>

                                    <div className="mt-8">
                                        <Tabs defaultValue="performance" className="w-full">
                                            <div className="flex items-center justify-between mb-4">
                                                <TabsList className="bg-slate-800/50 p-1">
                                                    <TabsTrigger
                                                        value="performance"
                                                        className="data-[state=active]:bg-slate-700 data-[state=active]:text-cyan-400"
                                                    >
                                                        Performance
                                                    </TabsTrigger>
                                                    <TabsTrigger
                                                        value="processes"
                                                        className="data-[state=active]:bg-slate-700 data-[state=active]:text-cyan-400"
                                                    >
                                                        Processes
                                                    </TabsTrigger>
                                                    <TabsTrigger
                                                        value="storage"
                                                        className="data-[state=active]:bg-slate-700 data-[state=active]:text-cyan-400"
                                                    >
                                                        Storage
                                                    </TabsTrigger>
                                                </TabsList>

                                                <div className="flex items-center space-x-2 text-xs text-slate-400">
                                                    <div className="flex items-center">
                                                        <div className="h-2 w-2 rounded-full bg-cyan-500 mr-1"></div>
                                                        CPU
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="h-2 w-2 rounded-full bg-purple-500 mr-1"></div>
                                                        Memory
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="h-2 w-2 rounded-full bg-blue-500 mr-1"></div>
                                                        Network
                                                    </div>
                                                </div>
                                            </div>

                                            <TabsContent value="performance" className="mt-0">
                                                <div className="h-64 w-full relative bg-slate-800/30 rounded-lg border border-slate-700/50 overflow-hidden">
                                                    <PerformanceChart />
                                                    <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-sm rounded-md px-3 py-2 border border-slate-700/50">
                                                        <div className="text-xs text-slate-400">System Load</div>
                                                        <div className="text-lg font-mono text-cyan-400">{cpuUsage}%</div>
                                                    </div>
                                                </div>
                                            </TabsContent>

                                            <TabsContent value="processes" className="mt-0">
                                                <div className="bg-slate-800/30 rounded-lg border border-slate-700/50 overflow-hidden">
                                                    <div className="grid grid-cols-12 text-xs text-slate-400 p-3 border-b border-slate-700/50 bg-slate-800/50">
                                                        <div className="col-span-1">PID</div>
                                                        <div className="col-span-4">Process</div>
                                                        <div className="col-span-2">User</div>
                                                        <div className="col-span-2">CPU</div>
                                                        <div className="col-span-2">Memory</div>
                                                        <div className="col-span-1">Status</div>
                                                    </div>

                                                    <div className="divide-y divide-slate-700/30">
                                                        <ProcessRow
                                                            pid="1024"
                                                            name="system_core.exe"
                                                            user="SYSTEM"
                                                            cpu={12.4}
                                                            memory={345}
                                                            status="running"
                                                        />
                                                        <ProcessRow
                                                            pid="1842"
                                                            name="nexus_service.exe"
                                                            user="SYSTEM"
                                                            cpu={8.7}
                                                            memory={128}
                                                            status="running"
                                                        />
                                                        <ProcessRow
                                                            pid="2156"
                                                            name="security_monitor.exe"
                                                            user="ADMIN"
                                                            cpu={5.2}
                                                            memory={96}
                                                            status="running"
                                                        />
                                                        <ProcessRow
                                                            pid="3012"
                                                            name="network_manager.exe"
                                                            user="SYSTEM"
                                                            cpu={3.8}
                                                            memory={84}
                                                            status="running"
                                                        />
                                                        <ProcessRow
                                                            pid="4268"
                                                            name="user_interface.exe"
                                                            user="USER"
                                                            cpu={15.3}
                                                            memory={256}
                                                            status="running"
                                                        />
                                                        <ProcessRow
                                                            pid="5124"
                                                            name="data_analyzer.exe"
                                                            user="ADMIN"
                                                            cpu={22.1}
                                                            memory={512}
                                                            status="running"
                                                        />
                                                    </div>
                                                </div>
                                            </TabsContent>

                                            <TabsContent value="storage" className="mt-0">
                                                <div className="bg-slate-800/30 rounded-lg border border-slate-700/50 p-4">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <StorageItem name="System Drive (C:)" total={512} used={324} type="SSD" />
                                                        <StorageItem name="Data Drive (D:)" total={2048} used={1285} type="HDD" />
                                                        <StorageItem name="Backup Drive (E:)" total={4096} used={1865} type="HDD" />
                                                        <StorageItem name="External Drive (F:)" total={1024} used={210} type="SSD" />
                                                    </div>
                                                </div>
                                            </TabsContent>
                                        </Tabs>
                                    </div>
                                </CardContent> */}
                    {/* Right sidebar */}
                    <div className="col-span-12 lg:col-span-3">
                        <div className="grid gap-6">
                            {/* Quick actions */}
                            <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
                                <CardHeader className="justify-between border-b border-slate-700/50 ">
                                    <CardTitle className="text-slate-100 text-base">Return On Investment</CardTitle>
                                </CardHeader>
                                <Carousel autoPlayInterval={5000} className="w-full max-w-xs ml-5">
                                    <CarouselContent>
                                        {apiData.data.map((coin: { name: string; symbol: string; roi: { [key: string]: number } }) => (
                                            <CarouselItem key={coin.symbol}>
                                                <div className="p-1">
                                                    <ROICard
                                                        name={coin.name}
                                                        symbol={coin.symbol}
                                                        roi={{
                                                            "24h": coin.roi["24h"],
                                                            "7d": coin.roi["7d"],
                                                            "30d": coin.roi["30d"],
                                                            "YTD": coin.roi["YTD"],
                                                            "1y": coin.roi["1y"],
                                                        }}
                                                        icon={Cpu} // Replace with token icons later if needed
                                                        color="cyan" // Optionally vary color
                                                    />
                                                </div>
                                            </CarouselItem>
                                        ))}

                                    </CarouselContent>
                                    <CarouselPrevious />
                                    <CarouselNext />
                                </Carousel>
                            </Card>

                            {/* News Feed*/}
                            <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-slate-100 text-base">News Feed</CardTitle>
                                </CardHeader>
                                <CardContent className="overflow-auto max-w-full">
                                    <div className="w-full">
                                        <NewsFeedTable articles={articles.articles} />
                                    </div>
                                </CardContent>

                            </Card>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

// Component for nav items
function NavItem({ icon: Icon, label, active }: { icon: LucideIcon; label: string; active?: boolean }) {
    return (
        <Button
            variant="ghost"
            className={`w-full justify-start ${active ? "bg-slate-800/70 text-cyan-400" : "text-slate-400 hover:text-slate-100"}`}
        >
            <Icon className="mr-2 h-4 w-4" />
            {label}
        </Button>
    )
}


function ROICard({
    name,
    symbol,
    roi,
    icon: Icon,
    color,
}: {
    name: string
    symbol: string
    roi: {
        "24h": number
        "7d": number
        "30d": number
        "YTD": number
        "1y": number
    }
    icon: LucideIcon
    color: string
}) {
    const trend = roi["24h"] > 0 ? "up" : roi["24h"] < 0 ? "down" : "stable"

    const getColor = () => {
        switch (color) {
            case "cyan":
                return "from-cyan-500 to-blue-500 border-cyan-500/30"
            case "green":
                return "from-green-500 to-emerald-500 border-green-500/30"
            case "blue":
                return "from-blue-500 to-indigo-500 border-blue-500/30"
            case "purple":
                return "from-purple-500 to-pink-500 border-purple-500/30"
            default:
                return "from-cyan-500 to-blue-500 border-cyan-500/30"
        }
    }

    const getTrendIcon = () => {
        switch (trend) {
            case "up":
                return <BarChart3 className="h-4 w-4 text-emerald-500" />
            case "down":
                return <BarChart3 className="h-4 w-4 rotate-180 text-red-500" />
            case "stable":
                return <LineChart className="h-4 w-4 text-slate-400" />
            default:
                return null
        }
    }

    const formatPercent = (value: number) => `${value.toFixed(2)}%`

    return (
        <div className={`h-60 rounded-lg border ${getColor()} p-4 relative overflow-hidden ${roi["24h"] > 0
            ? "bg-green-900/50"
            : roi["24h"] < 0
                ? "bg-red-900/50"
                : "bg-slate-800/50"
            }`}>
            <div className="flex items-center justify-between mb-2">
                <div className="text-md text-white-400 font-semibold">
                    {name} ({symbol})
                </div>
                <Icon className={`h-5 w-5 text-${color}-500`} />
            </div>

            <div className="text-xs text-slate-500 mb-2">ROI Snapshot</div>

            <div className="grid grid-cols-2 gap-2 text-base font-semibold text-slate-300 mb-3">
                <div>
                    24h: <span className={roi["24h"] < 0 ? "text-red-400" : "text-green-400"}>{formatPercent(roi["24h"])}</span>
                </div>
                <div>
                    7d: <span className={roi["7d"] < 0 ? "text-red-400" : "text-green-400"}>{formatPercent(roi["7d"])}</span>
                </div>
                <div>
                    30d: <span className={roi["30d"] < 0 ? "text-red-400" : "text-green-400"}>{formatPercent(roi["30d"])}</span>
                </div>
                <div>
                    YTD: <span className={roi["YTD"] < 0 ? "text-red-400" : "text-green-400"}>{formatPercent(roi["YTD"])}</span>
                </div>
                <div>
                    1y: <span className={roi["1y"] < 0 ? "text-red-400" : "text-green-400"}>{formatPercent(roi["1y"])}</span>
                </div>
            </div>

            <div className="absolute bottom-2 right-2 flex items-center">{getTrendIcon()}</div>
            <div className="absolute -bottom-6 -right-6 h-16 w-16 rounded-full bg-gradient-to-r opacity-20 blur-xl from-cyan-500 to-blue-500"></div>
        </div>
    )
}

