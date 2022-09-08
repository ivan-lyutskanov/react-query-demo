import './PrintJSON.css'

export default function PrintJSON(props) {
  return (
    <pre className="PrintJSON">
        {JSON.stringify(props.data, null, 2)}
    </pre>
  )
}
