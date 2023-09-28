interface IProps {
    children: React.ReactNode
}

export default ({children}: IProps) => {
    return (
        <main>
            <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="d-flex flex-column">
                    {children}
                </div>
            </div>
        </main >
    )
};