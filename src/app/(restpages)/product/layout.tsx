import ProductLeftNav from "../../../components/ProductLeftNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
        <div className="productMainWraper">
            <ProductLeftNav />
            <div>
            {children}
            </div>
        </div>
  )
}
