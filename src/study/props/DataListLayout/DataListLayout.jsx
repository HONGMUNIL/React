function DataListLayout({ children }) {
    //App.jsx에 DataListLayout태그에 속성들이 
    // children이라고 react에서 명시해놨다

    console.log(children);
    const liList = [
        <li>5번 리스트</li>,
        <li>6번 리스트</li>,
        <li>7번 리스트</li>,
        <li>8번 리스트</li>,

    ];
    const children2 = children.map(li => <li>{"1" + li.props / children}</li>)
    return <ul>
    {children}
    {liList}
    {
        children.map((li, index) => 
            <li key={index}>{"1" + li.props.children}</li>
        )
    }
    {
        liList.map((li, index) => 
            <li key={index}>{"2" + li.props.children}</li>
        )
    }
</ul>





}





export default DataListLayout;
