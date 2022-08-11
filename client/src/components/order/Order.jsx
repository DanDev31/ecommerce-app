import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';



export const Order = () => {
    const { user } = useSelector(state => state.user)
    return (
        <div>
            <h2>Hi, {user?.name}</h2>
            <p>Your Orders:</p>
        </div>
    )
}
