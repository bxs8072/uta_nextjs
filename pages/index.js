import { Card, ListGroupItem } from 'reactstrap'

export default function Home({ dimension }) {

  var myCardList = [
    { image: "https://static.campuslabsengage.com/discovery/images/groups_icon.svg", title: "Find Organizations", body: "Join a new organization and utilize discussion, news posts and group messaging." },
    { image: "https://static.campuslabsengage.com/discovery/images/events_icon.svg", title: "Attend Events", body: "Discover events happening on campus or in your area." },
    { image: "https://static.campuslabsengage.com/discovery/images/paths_icon.svg", title: "Track Involvement", body: "Record your activities and memberships on campus to showcase your involvement." }
  ]
  function MyCard({ props }) {

    return <Card
      className='z-depth-3'
      style={{
        width: "23%",
        flexDirection: "column",
        padding: "20px",
        margin: "15px",
        position: "initial",
        textAlign: "center",
        borderRadius: 15
      }}>
      <img src={props.image} style={{
        width: "50%",
        margin: "0px auto"
      }} />
      <br />

      <a style={{
        textDecorationLine: "underline",
        fontSize: "28px",
      }}>{props.title}</a>

      <p>{props.body}</p>
    </Card>
  }
  return (
    <div style={{ width: "100%", marginTop: "20px" }}>
      <div style={{ display: "flex", flexFlow: "row nowrap", width: "initial", justifyContent: "center" }}>
        {myCardList.map((item, index) => {
          return <MyCard key={index} props={item} />
        })}
      </div >
    </div>
  )
}
