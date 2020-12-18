import React from 'react';


function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number, i) =>
  <div>
      <ListItem key={i} value={number.brand} />
      <ListItem key={i} value={number.cheddar}/>
      <p>{i}</p>
    </div>
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [{brand:'1', cheddar:'2'},
                 {brand:'2', cheddar:'4'}
];

export default class Playground extends React.Component {

    handleChange = (event) => {
      console.log(event.target.id)
    }

    render() {
    return (<div>
                <NumberList numbers={numbers}/>
                  <input
                    onChange={this.handleChange}
                    id="blah"
                  />


        </div>)
    }
}





