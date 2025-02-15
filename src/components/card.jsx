export default function Card(props) {
    return (
        <article key={props.id}>
            <h3>{`${props.name}`}</h3>
            <p>{`${props.text}`}</p>
            <a href={props.url1}>Link to deployed Site</a>
            <a href={props.url2}>Link to Github</a>
        </article>
    )
}