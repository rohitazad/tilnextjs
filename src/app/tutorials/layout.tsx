
import LeftNav from "../../components/Advaced/LeftNav";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <div className='innerWraper'>
            <div className="leftWraper">
                <LeftNav />
            </div>
            <div className="rightWraper">
                {children}
            </div>
        </div>
  )
}
