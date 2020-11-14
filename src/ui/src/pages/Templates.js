import React, { Component } from 'react';
import {API} from 'aws-amplify';
import { UserConsumer } from './../context';
import { NavMenu } from './../components/NavMenu';
import DesktopImage from '.././images/Background.jpg'
import MobileImage from '.././images/Background.jpg'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Link from '@material-ui/core/Link';
import * as queries from './../graphql/queries';
import * as mutations from './../graphql/mutations';

const MainImage = window.innerWidth >= 650 ? DesktopImage : MobileImage;

export class Templates extends Component {
  static displayName = Templates.name; 

  state = {
    data: [],
  }

  componentDidMount(){
      this.fetch()
  }

  fetch = async () => {
      const dojoClasses = await API.graphql({ query: queries.listDojoClasses });
      this.setState({
          data: dojoClasses.data.listDojoClasses.items
      });
      console.log(dojoClasses.data.listDojoClasses.items)
  }

  render() {
    return (
        <div className="App">
          {this.props.match.params.showHeader === "showHeader=false"
          ? <div></div>
          : <NavMenu/>}
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell>Template</TableCell>
                          <TableCell>Description</TableCell>
                          <TableCell>Link</TableCell>                       
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      <TableRow key="slide">
                          <TableCell>DOJO Google Slide</TableCell>
                          <TableCell>For making your own lesson</TableCell>
                          <TableCell>
                            <Link href="https://docs.google.com/presentation/d/1OGUo7jK5R2FC9em5uoohuzjcKmGzewNnolhrZnqzgjk/edit?usp=sharing">
                              Download Slide Tempate
                            </Link>
                        </TableCell>
                      </TableRow>
                  </TableBody>
                </Table>
        </div>
      )}               
   }
    
    
  export default Templates;