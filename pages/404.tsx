import Link from "next/link"

const page404 = () => {
	return (
		<section className="d-flex align-items-center justify-content-center h-100">
			<section className="d-flex flex-column">
				<h1><Link href={"/"}>ПНХ</Link></h1>
			</section>
		</section>
	)
}
export default page404
