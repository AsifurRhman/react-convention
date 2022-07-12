import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Spinner from '../../Spinner/Spinner';
import Modal from '../Modal';
import ManageTable from './ManageTable'
const ManageOrder = () => {
    const [modal, setModal] = useState({})
    const { data: allorders, isLoading, refetch } = useQuery('allorders', () => fetch(`https://hidden-brushlands-28019.herokuapp.com/order`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Spinner />
    }
    // const orderDelete = (id) => {



    //     fetch(`https://salty-reef-27679.herokuapp.com/order/${id}`, {
    //         method: 'DELETE',
    //         headers: {
    //             "content-type": "application/json",
    //             authorization: `Bearer ${localStorage.getItem('token')}`
    //         }

    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.deletedCount) {
    //                 refetch()
    //                 setModal({})
    //                 toast.success('Order delete successfully')
    //             }
    //         })

    // }

    return (
        <div>
            {allorders?.length ? <h1 className='font-bold text-2xl sp-style text-blue-900 mt-10'>Here is the {allorders?.length} {allorders?.length == 1 ? 'order' : 'orders'}:-</h1> : <h1 className='font-bold text-2xl sp-style text-red-900 mt-10'>There is no Order</h1>}




            {
                modal?._id && <Modal
                    modal={modal}
                    setModal={setModal}
                // sendEvent={orderDelete}


                ></Modal>
            }



            <div className="overflow-x-auto mt-10">
                <table className="table w-full">

                    <thead>
                        <tr className='text-center'>
                            <th>No.</th>
                            <th>Image</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Package</th>
                            <th>Price</th>
                            <th>Adults</th>
                            <th>Child</th>
                            <th>CheckIn</th>
                            <th>StartTme</th>
                            <th>Extra Request</th>
                            {/* <th>Give Discount</th> */}
                            {/* <th colspan='2'>Action</th> */}


                        </tr>
                    </thead>
                    <tbody>

                        {
                            allorders?.map((o, index) => <ManageTable
                                key={o._id}
                                o={o}
                                index={index}
                                refetch={refetch}
                                // sendEvent={orderDelete}
                                setModal={setModal}
                                isLoading={isLoading}
                            ></ManageTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrder;