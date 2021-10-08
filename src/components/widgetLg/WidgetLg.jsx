import "./widgetLg.css"

export default function WidgetLg() {
    const Button = ({type}) => {
        return <button className={"widgetLgButton " + type} >{type}</button>;
    }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Last Transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://scontent.fdad3-3.fna.fbcdn.net/v/t1.6435-9/69873628_2572541156306706_8821361195278663680_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=jAQE6t4zdeoAX_vf2vx&_nc_ht=scontent.fdad3-3.fna&oh=6176a08a1f63a8df1e81e9225f7ae465&oe=618323E0"
                         alt="" className="widgetLgImage" />
                        <span className="widgetLgName">Susan</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved"/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://scontent.fdad3-3.fna.fbcdn.net/v/t1.6435-9/69873628_2572541156306706_8821361195278663680_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=jAQE6t4zdeoAX_vf2vx&_nc_ht=scontent.fdad3-3.fna&oh=6176a08a1f63a8df1e81e9225f7ae465&oe=618323E0"
                         alt="" className="widgetLgImage" />
                        <span className="widgetLgName">Susan</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122</td>
                    <td className="widgetLgStatus">
                        <Button type="Declined"/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://scontent.fdad3-3.fna.fbcdn.net/v/t1.6435-9/69873628_2572541156306706_8821361195278663680_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=jAQE6t4zdeoAX_vf2vx&_nc_ht=scontent.fdad3-3.fna&oh=6176a08a1f63a8df1e81e9225f7ae465&oe=618323E0"
                         alt="" className="widgetLgImage" />
                        <span className="widgetLgName">Susan</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122</td>
                    <td className="widgetLgStatus">
                        <Button type="Pending"/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://scontent.fdad3-3.fna.fbcdn.net/v/t1.6435-9/69873628_2572541156306706_8821361195278663680_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=jAQE6t4zdeoAX_vf2vx&_nc_ht=scontent.fdad3-3.fna&oh=6176a08a1f63a8df1e81e9225f7ae465&oe=618323E0"
                         alt="" className="widgetLgImage" />
                        <span className="widgetLgName">Susan</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved"/>
                    </td>
                </tr>
            </table>
        </div>
    )
}
