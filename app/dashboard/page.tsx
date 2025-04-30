"use client"

import { useEffect, useState, useRef } from "react"
import {
    Activity,
    AlertCircle,
    BarChart3,
    Bell,
    CircleOff,
    Command,
    Cpu,
    Database,
    Download,
    Globe,
    HardDrive,
    Hexagon,
    LineChart,
    Lock,
    type LucideIcon,
    MessageSquare,
    Mic,
    Moon,
    Radio,
    RefreshCw,
    Search,
    Settings,
    Shield,
    Sun,
    Terminal,
    Wifi,
    Zap,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { NewsFeedTable } from "@/components/NewsFeedTable"


export default function Dashboard() {
    const [theme, setTheme] = useState<"dark" | "light">("dark")
    const [systemStatus, setSystemStatus] = useState(85)
    const [cpuUsage, setCpuUsage] = useState(42)
    const [memoryUsage, setMemoryUsage] = useState(68)
    const [networkStatus, setNetworkStatus] = useState(92)
    const [securityLevel, setSecurityLevel] = useState(75)
    const [currentTime, setCurrentTime] = useState(new Date())
    const [isLoading, setIsLoading] = useState(true)

    const canvasRef = useRef<HTMLCanvasElement>(null)

    // Simulate data loading
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    // Update time
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    // Simulate changing data
    useEffect(() => {
        const interval = setInterval(() => {
            setCpuUsage(Math.floor(Math.random() * 30) + 30)
            setMemoryUsage(Math.floor(Math.random() * 20) + 60)
            setNetworkStatus(Math.floor(Math.random() * 15) + 80)
            setSystemStatus(Math.floor(Math.random() * 10) + 80)
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    // Particle effect
    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        canvas.width = canvas.offsetWidth
        canvas.height = canvas.offsetHeight

        const particles: Particle[] = []
        const particleCount = 100

        class Particle {
            x: number
            y: number
            size: number
            speedX: number
            speedY: number
            color: string

            constructor() {
                this.x = canvas ? Math.random() * canvas.width : 0
                this.y = canvas ? Math.random() * canvas.height : 0
                this.size = Math.random() * 3 + 1
                this.speedX = (Math.random() - 0.5) * 0.5
                this.speedY = (Math.random() - 0.5) * 0.5
                this.color = `rgba(${Math.floor(Math.random() * 100) + 100}, ${Math.floor(Math.random() * 100) + 150}, ${Math.floor(Math.random() * 55) + 200}, ${Math.random() * 0.5 + 0.2})`
            }

            update() {
                this.x += this.speedX
                this.y += this.speedY

                if (canvas && this.x > canvas.width) this.x = 0
                if (canvas && this.x < 0) this.x = canvas.width
                if (canvas && this.y > canvas.height) this.y = 0
                if (this.y < 0 && canvas) this.y = canvas.height
            }

            draw() {
                if (!ctx) return
                ctx.fillStyle = this.color
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fill()
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle())
        }

        function animate() {
            if (!ctx || !canvas) return
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            for (const particle of particles) {
                particle.update()
                particle.draw()
            }

            requestAnimationFrame(animate)
        }

        animate()

        const handleResize = () => {
            if (!canvas) return
            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    // Toggle theme
    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    // Format time
    const formatTime = (date: Date) => {
        return date.toLocaleTimeString("en-US", {
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        })
    }

    // Format date
    const formatDate = (date: Date) => {
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        })
    }

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
            className={``}
        >
            <div className="container mx-auto p-1 relative z-10 ">
                <div className="grid grid-cols-12 gap-6 h-full">
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
                                    <div className="space-y-3">
                                        <StatusItem label="Core Systems" value={systemStatus} color="cyan" />
                                        <StatusItem label="Security" value={securityLevel} color="green" />
                                        <StatusItem label="Network" value={networkStatus} color="blue" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>


                    {/* Main dashboard */}
                    <div className="col-span-12 md:col-span-9 lg:col-span-7">
                        <div className="grid gap-6">
                            {/* System overview */}
                            <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm overflow-hidden">
                                <CardHeader className="border-b border-slate-700/50 pb-3">
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="text-slate-100 flex items-center">
                                            <Activity className="mr-2 h-5 w-5 text-cyan-500" />
                                            System Overview
                                        </CardTitle>
                                        <div className="flex items-center space-x-2">
                                            <Badge variant="outline" className="bg-slate-800/50 text-cyan-400 border-cyan-500/50 text-xs">
                                                <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 mr-1 animate-pulse"></div>
                                                LIVE
                                            </Badge>
                                            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400">
                                                <RefreshCw className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-6">
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
                                </CardContent>
                            </Card>
                        </div>
                    </div>

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
                                        {apiData.data.map((coin: { name: string; symbol: string; roi: { [key: string]: number } }, index: number) => (
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

// Component for status items
function StatusItem({ label, value, color }: { label: string; value: number; color: string }) {
    const getColor = () => {
        switch (color) {
            case "cyan":
                return "from-cyan-500 to-blue-500"
            case "green":
                return "from-green-500 to-emerald-500"
            case "blue":
                return "from-blue-500 to-indigo-500"
            case "purple":
                return "from-purple-500 to-pink-500"
            default:
                return "from-cyan-500 to-blue-500"
        }
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-1">
                <div className="text-xs text-slate-400">{label}</div>
                <div className="text-xs text-slate-400">{value}%</div>
            </div>
            <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className={`h-full bg-gradient-to-r ${getColor()} rounded-full`} style={{ width: `${value}%` }}></div>
            </div>
        </div>
    )
}

// Component for metric cards
function MetricCard({
    title,
    value,
    icon: Icon,
    trend,
    color,
    detail,
}: {
    title: string
    value: number
    icon: LucideIcon
    trend: "up" | "down" | "stable"
    color: string
    detail: string
}) {
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
                return <BarChart3 className="h-4 w-4 text-amber-500" />
            case "down":
                return <BarChart3 className="h-4 w-4 rotate-180 text-green-500" />
            case "stable":
                return <LineChart className="h-4 w-4 text-blue-500" />
            default:
                return null
        }
    }

    return (
        <div className={`bg-slate-800/50 rounded-lg border ${getColor()} p-4 relative overflow-hidden`}>
            <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-slate-400">{title}</div>
                <Icon className={`h-5 w-5 text-${color}-500`} />
            </div>
            <div className="text-2xl font-bold mb-1 bg-gradient-to-r bg-clip-text text-transparent from-slate-100 to-slate-300">
                {value}%
            </div>
            <div className="text-xs text-slate-500">{detail}</div>
            <div className="absolute bottom-2 right-2 flex items-center">{getTrendIcon()}</div>
            <div className="absolute -bottom-6 -right-6 h-16 w-16 rounded-full bg-gradient-to-r opacity-20 blur-xl from-cyan-500 to-blue-500"></div>
        </div>
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


// Performance chart component
function PerformanceChart() {
    return (
        <div className="h-full w-full flex items-end justify-between px-4 pt-4 pb-8 relative">
            {/* Y-axis labels */}
            <div className="absolute left-2 top-0 h-full flex flex-col justify-between py-4">
                <div className="text-xs text-slate-500">100%</div>
                <div className="text-xs text-slate-500">75%</div>
                <div className="text-xs text-slate-500">50%</div>
                <div className="text-xs text-slate-500">25%</div>
                <div className="text-xs text-slate-500">0%</div>
            </div>

            {/* X-axis grid lines */}
            <div className="absolute left-0 right-0 top-0 h-full flex flex-col justify-between py-4 px-10">
                <div className="border-b border-slate-700/30 w-full"></div>
                <div className="border-b border-slate-700/30 w-full"></div>
                <div className="border-b border-slate-700/30 w-full"></div>
                <div className="border-b border-slate-700/30 w-full"></div>
                <div className="border-b border-slate-700/30 w-full"></div>
            </div>

            {/* Chart bars */}
            <div className="flex-1 h-full flex items-end justify-between px-2 z-10">
                {Array.from({ length: 24 }).map((_, i) => {
                    const cpuHeight = Math.floor(Math.random() * 60) + 20
                    const memHeight = Math.floor(Math.random() * 40) + 40
                    const netHeight = Math.floor(Math.random() * 30) + 30

                    return (
                        <div key={i} className="flex space-x-0.5">
                            <div
                                className="w-1 bg-gradient-to-t from-cyan-500 to-cyan-400 rounded-t-sm"
                                style={{ height: `${cpuHeight}%` }}
                            ></div>
                            <div
                                className="w-1 bg-gradient-to-t from-purple-500 to-purple-400 rounded-t-sm"
                                style={{ height: `${memHeight}%` }}
                            ></div>
                            <div
                                className="w-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-sm"
                                style={{ height: `${netHeight}%` }}
                            ></div>
                        </div>
                    )
                })}
            </div>

            {/* X-axis labels */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between px-10">
                <div className="text-xs text-slate-500">00:00</div>
                <div className="text-xs text-slate-500">06:00</div>
                <div className="text-xs text-slate-500">12:00</div>
                <div className="text-xs text-slate-500">18:00</div>
                <div className="text-xs text-slate-500">24:00</div>
            </div>
        </div>
    )
}

// Process row component
function ProcessRow({
    pid,
    name,
    user,
    cpu,
    memory,
    status,
}: {
    pid: string
    name: string
    user: string
    cpu: number
    memory: number
    status: string
}) {
    return (
        <div className="grid grid-cols-12 py-2 px-3 text-sm hover:bg-slate-800/50">
            <div className="col-span-1 text-slate-500">{pid}</div>
            <div className="col-span-4 text-slate-300">{name}</div>
            <div className="col-span-2 text-slate-400">{user}</div>
            <div className="col-span-2 text-cyan-400">{cpu}%</div>
            <div className="col-span-2 text-purple-400">{memory} MB</div>
            <div className="col-span-1">
                <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30 text-xs">
                    {status}
                </Badge>
            </div>
        </div>
    )
}

// Storage item component
function StorageItem({
    name,
    total,
    used,
    type,
}: {
    name: string
    total: number
    used: number
    type: string
}) {
    const percentage = Math.round((used / total) * 100)

    return (
        <div className="bg-slate-800/50 rounded-md p-3 border border-slate-700/50">
            <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-slate-300">{name}</div>
                <Badge variant="outline" className="bg-slate-700/50 text-slate-300 border-slate-600/50 text-xs">
                    {type}
                </Badge>
            </div>
            <div className="mb-2">
                <div className="flex items-center justify-between mb-1">
                    <div className="text-xs text-slate-500">
                        {used} GB / {total} GB
                    </div>
                    <div className="text-xs text-slate-400">{percentage}%</div>
                </div>
                <Progress value={percentage} className="h-1.5 bg-slate-700">
                    <div
                        className={`h-full rounded-full ${percentage > 90 ? "bg-red-500" : percentage > 70 ? "bg-amber-500" : "bg-cyan-500"
                            }`}
                        style={{ width: `${percentage}%` }}
                    />
                </Progress>
            </div>
            <div className="flex items-center justify-between text-xs">
                <div className="text-slate-500">Free: {total - used} GB</div>
                <Button variant="ghost" size="sm" className="h-6 text-xs px-2 text-slate-400 hover:text-slate-100">
                    Details
                </Button>
            </div>
        </div>
    )
}

// Alert item component
function AlertItem({
    title,
    time,
    description,
    type,
}: {
    title: string
    time: string
    description: string
    type: "info" | "warning" | "error" | "success" | "update"
}) {
    const getTypeStyles = () => {
        switch (type) {
            case "info":
                return { icon: Info, color: "text-blue-500 bg-blue-500/10 border-blue-500/30" }
            case "warning":
                return { icon: AlertCircle, color: "text-amber-500 bg-amber-500/10 border-amber-500/30" }
            case "error":
                return { icon: AlertCircle, color: "text-red-500 bg-red-500/10 border-red-500/30" }
            case "success":
                return { icon: Check, color: "text-green-500 bg-green-500/10 border-green-500/30" }
            case "update":
                return { icon: Download, color: "text-cyan-500 bg-cyan-500/10 border-cyan-500/30" }
            default:
                return { icon: Info, color: "text-blue-500 bg-blue-500/10 border-blue-500/30" }
        }
    }

    const { icon: Icon, color } = getTypeStyles()

    return (
        <div className="flex items-start space-x-3">
            <div className={`mt-0.5 p-1 rounded-full ${color.split(" ")[1]} ${color.split(" ")[2]}`}>
                <Icon className={`h-3 w-3 ${color.split(" ")[0]}`} />
            </div>
            <div>
                <div className="flex items-center">
                    <div className="text-sm font-medium text-slate-200">{title}</div>
                    <div className="ml-2 text-xs text-slate-500">{time}</div>
                </div>
                <div className="text-xs text-slate-400">{description}</div>
            </div>
        </div>
    )
}

// Communication item component
function CommunicationItem({
    sender,
    time,
    message,
    avatar,
    unread,
}: {
    sender: string
    time: string
    message: string
    avatar: string
    unread?: boolean
}) {
    return (
        <div className={`flex space-x-3 p-2 rounded-md ${unread ? "bg-slate-800/50 border border-slate-700/50" : ""}`}>
            <Avatar className="h-8 w-8">
                <AvatarImage src={avatar} alt={sender} />
                <AvatarFallback className="bg-slate-700 text-cyan-500">{sender.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
                <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-slate-200">{sender}</div>
                    <div className="text-xs text-slate-500">{time}</div>
                </div>
                <div className="text-xs text-slate-400 mt-1">{message}</div>
            </div>
            {unread && (
                <div className="flex-shrink-0 self-center">
                    <div className="h-2 w-2 rounded-full bg-cyan-500"></div>
                </div>
            )}
        </div>
    )
}

// Action button component
function ActionButton({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
    return (
        <Button
            variant="outline"
            className="h-auto py-3 px-3 border-slate-700 bg-slate-800/50 hover:bg-slate-700/50 flex flex-col items-center justify-center space-y-1 w-full"
        >
            <Icon className="h-5 w-5 text-cyan-500" />
            <span className="text-xs">{label}</span>
        </Button>
    )
}

// Define the CoinData interface
interface CoinData {
    name: string;
    symbol: string;
    roi: {
        "24h": number;
        "7d": number;
        "30d": number;
        "YTD": number;
        "1y": number;
    };
}

// Add missing imports
function Info(props: React.ComponentProps<typeof AlertCircle>) {
    return <AlertCircle {...props} />
}

interface CheckProps extends React.ComponentProps<typeof Shield> { }

function Check(props: CheckProps) {
    return <Shield {...props} />
}
