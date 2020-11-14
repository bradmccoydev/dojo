import React, { Component } from 'react';
import { NavMenu } from './../components/NavMenu';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import AwsCertifiedPractitioner from '.././images/aws-cloud-practitioner.jpg'

export class Milestones extends Component {
  static displayName = Milestones.name; 

  render() {
    return (
        <div className="App">
          {this.props.match.params.showHeader === "showHeader=false"
          ? <div></div>
          : <NavMenu/>}
              <Table>
                  <TableHead>
                    <TableRow>
                        <TableCell>Cert</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Date</TableCell>                       
                    </TableRow>
                  </TableHead>
                  <TableBody>
                      <TableRow key="brad">
                        <TableCell>
                            <img src={AwsCertifiedPractitioner} alt="Cloud Practitioner" height={200} width={200} />
                        </TableCell>
                        <TableCell>Yadwinder Verma</TableCell>
                        <TableCell>2020-11-01</TableCell>
                      </TableRow>
                      <TableRow key="b">
                         <TableCell>
                              <img src={AwsCertifiedPractitioner} alt="Cloud Practitioner" height={200} width={200} />
                          </TableCell>
                          <TableCell>Brad McCoy</TableCell>
                          <TableCell>2020-11-08</TableCell>
                      </TableRow>
                  </TableBody>
                </Table>
        </div>
      )}               
   }
  
    
  export default Milestones;