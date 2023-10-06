import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body className='bg-light' style={{fontSize: "13px"}}>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
