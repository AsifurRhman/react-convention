import React from 'react';
import { toast } from 'react-toastify';
import noImage from '../../../no-image.png'
import useAdmin from '../../../Hooks/useAdmin';
const UserRow = ({ user, index, refetch }) => {
    const { email, role, name, img } = user
    const [admin] = useAdmin(user)
    // console.log(admin,"admin from admin")
    // console.log(email,"email from admin")
    const makeAdmin = () => {
        fetch(`https://royal-convention-server.vercel.app/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }

        )
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('SuccessFully make a admin')
                }
                else {
                    toast.error(`Sorry!!! You can't make anyone admin.Only admin can make other's admin`)
                }
            })

    }
    const demoteAdmin = () => {
      
        fetch(`https://royal-convention-server.vercel.app/user/demote-from-admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }

        )
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('You demote this user from admin')
                }
                else {
                    toast.error(`Sorry!!! You can't demote  admin.Only admin can do this`)
                }
            })

    }
    const giveDiscount = (e) => {
        e.preventDefault()
        const sendEmail = email;
        const sendDiscount = e.target.discount.value
        console.log(sendDiscount, sendEmail);
        fetch(`https://royal-convention-server.vercel.app/discount/${sendEmail}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ sendDiscount, sendEmail })
        })
            .then(res => res.json())
            .then(inserted => {
                console.log(inserted, 'inser');
                // console.log(inserted,'inser');
                if (inserted.modifiedCount > 0) {
                    toast.success(`${sendDiscount}% , discount sent successfully`);

                    e.target.reset()
                }
                else {
                    toast.error('Failed to give discount')
                }
            }
            )
        e.target.reset()
    }
    let offerSent;

    if (!role) {
        offerSent = <form onSubmit={giveDiscount}>
            <input type='text' name='discount' required />
            <input type='submit' className='pl-5 pr-5 ml-5 bg-slate-500 text-white' value='Discount' />
        </form>
    }
    return (
        <tr className='text-center'>
            <th>{index + 1}</th>
            <td>
                {
                    img ? <div class="avatar">
                        <div class="w-20 rounded">
                            <img src={img} alt="Tailwind-CSS-Avatar-component" />
                        </div>
                    </div>
                        :
                        <div class="avatar">
                            <div class="w-20 rounded">
                                <img src={noImage} alt="Tailwind-CSS-Avatar-component" />
                            </div>
                        </div>
                }


            </td>
            <td><span className="font-bold">{name}</span></td>
            <td><span className="font-bold">{email}</span></td>
            <td>{role === "admin" ? <>
                <span className='text-green-700 sp-style'> Admin</span>
                <button onClick={demoteAdmin} className="btn btn-xs bg-red-500 ml-5 hover:bg-red-700 ">Demote</button>
            </>
                 : <button onClick={makeAdmin} className="btn btn-xs">Promote</button>}</td>
            {/* <td>
                {
                    offerSent
                }


            </td> */}
        </tr>

    );
};

export default UserRow;