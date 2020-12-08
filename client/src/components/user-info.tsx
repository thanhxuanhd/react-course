import React, { Component } from 'react';
import { UserInfoState } from '../core';
export class UserInfo extends Component<unknown, UserInfoState> {
    state: UserInfoState = {
        editFlag: false
    }

    editUser = () => {
        const editFlag = this.state.editFlag;
        this.setState({
            editFlag: !editFlag
        });
    }

    render() {
        return (
            <div className="user-info">
                <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 ml-5 mr-5 mt-5">
                    <h3 className="font-bold text-xl">Wellcome to Zoo</h3>
                    <button className="text-gray-800 font-bold rounded border-gray-500 
                        hover:border-gray-600 shadow-md p-2 inline-flex items-center m-4" title="Edit User"
                        onClick={this.editUser}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round"
                                strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                    </button>
                </div>
                {
                    this.state.editFlag ?
                        < div className="lex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 ml-5 mr-5 mt-5">
                            <h3 className="font-bold text-sm">Edit Zoo</h3>
                        </div>
                        : <div></div>
                }
            </div >
        );
    }

}

export default UserInfo;