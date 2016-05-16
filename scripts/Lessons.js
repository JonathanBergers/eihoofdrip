/**
 * Created by jonathan on 5/16/16.
 */
import React, {Component} from 'react';


import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


export default class Lessons extends Component {


    static propTypes = {
            course: React.PropTypes.object.isRequired
        }


    render() {
        console.log('dude' , this.props.course)
        var course_rows = this.props.course.lessons.map((course)=> {
            console.log(course)
                return <TableRow>
                    <TableRowColumn>{course.title}</TableRowColumn>
                    <TableRowColumn><a href= {course.url}>Website</a></TableRowColumn>
                    <TableRowColumn><a href= {course.url_video}>Video</a></TableRowColumn>
                </TableRow>
            });
        

        return (
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>Titel</TableHeaderColumn>
                        <TableHeaderColumn>Link</TableHeaderColumn>
                        <TableHeaderColumn>Video</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {course_rows}
                </TableBody>
            </Table>

        );
    }
}
