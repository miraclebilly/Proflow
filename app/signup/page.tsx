"use client"
import Link from "next/link"
import { signInWithGoogle} from "../utils/supabase/client"
import { signup } from './action'
import { useState } from 'react'




export default function SignupPage() {
    
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md mx-auto mt-8">
          <form 
            
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1 className="text-3xl mb-6 font-bold text-center">Sign Up</h1>

                <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                        Email
                    </label>
                    <input 
                        type="email"
                        name="email"
                        id="email"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Email"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                        Password
                    </label>
                    <input 
                        type="password"
                        name="password"
                        id="password"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Password"
                        required
                    />
                </div>
                <div className="flex items-center justfiy-center">
                    <button formAction={signup} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Sign Up
                    </button>
                </div>
          </form>
          <button onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
      </div>
    );
  }
  