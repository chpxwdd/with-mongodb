
interface IHeaderProps {
    title: string,
    lead?: string
}
const Header = ({title, lead}: IHeaderProps) => {
    return (
        <h1 className="text-secondary">
            {title}
            {lead && <span className="ms-2 lead text-warning">{lead}</span>}
        </h1>
    )
}

export default Header;