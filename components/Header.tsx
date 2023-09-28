
interface IHeaderProps {
    title: string,
    lead?: string
}
const Header = ({title, lead}: IHeaderProps) => <h1>{title}{lead && <span className="ms-2 lead text-muted">{lead}</span>}</h1>

export default Header;