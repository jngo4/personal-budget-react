import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';
import axios from 'axios';

export default class Chart extends Component
{
   constructor(props) {
      super(props);
      this.state = {
        Data: {}
      }
    }
    componentDidMount() {
      axios.get('http://localhost:4200/budget')
        .then(res => {
          const budg = res.data;
          let title = [];
          let budget = [];
          for (var i = 0; i < budg.length; i++) {
            title.push(budg[i].title);
            budget.push(budg[i].budget);
        };
          this.setState({ 
            Data: {
              labels: title,
              datasets:[
                 {
                    data: budget ,
                    backgroundColor:[
                      '#ffcd56',
                      '#ff6384',
                      '#36a2eb',
                      '#fd6b19',
                      '#03fc41',
                      '#0335fc',
                      '#e303fc',
                  ]
                 }
              ]
           }
           });
        })
    }
 render()
   {
      return(
        <div>
        <Pie
          data={this.state.Data}
          options={{maintainAspectRatio: false}}/>
     </div>
      )
   }
}