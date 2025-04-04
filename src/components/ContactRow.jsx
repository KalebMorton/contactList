


export default function ContactRow({setSelectedContactId3, contactInfo}) {
    //console.log(setSelectedContactId3)
    return (
        <tr onClick={()=>{setSelectedContactId3.setSelectedContactId2(contactInfo.id)}}>
            <td>{contactInfo.name}</td>
            <td>{contactInfo.email}</td>
            <td>{contactInfo.phone}</td>
        </tr>
    )
}