import ProfileForm from '@/components/forms/profile-form'
import React from 'react'
import ProfilePicture from './_components/profile-picture'
import { db } from '@/lib/db'
import { auth } from '@clerk/nextjs/server'

export const removeProfileImage = async () => {
  'use server'

  const { userId } = await auth() // 🔹 Aguarda a Promise resolver
  if (!userId) return false

  const response = await db.user.update({
    where: { clerkId: userId },
    data: { profileImage: '' }
  })

  return !!response
}

const Settings = async () => {
  const { userId } = await auth() // 🔹 Aguarda a Promise resolver
  if (!userId) return <p>Usuário não autenticado</p>

  // Busca o usuário no banco de dados
  const user = await db.user.findUnique({
    where: { clerkId: userId }
  })

  // Função para atualizar a imagem de perfil
  const uploadProfileImage = async (url: string) => {
    'use server'
    
    if (!userId) return false

    const response = await db.user.update({
      where: { clerkId: userId },
      data: { profileImage: url }
    })

    return !!response
  }

  return (
    <div className='flex flex-col gap-4'>
      <h1 className='sticky top-0 z-[10] flex items-center justify-between 
      border-b bg-background/50 p-6 text-4xl backdrop-blur-lg'>
        <span>Settings</span>
      </h1>
      <div className='flex flex-col gap-10 p-6'>
        <div>
          <h2 className='text-2xl font-bold'>Perfil</h2>
          <p className='text-base text-white/50'>
            Adicione ou atualize suas informações
          </p>
        </div>
      </div>
      
      <ProfilePicture
        onDelete={removeProfileImage}
        userImage={user?.profileImage || ''}
        onUpload={uploadProfileImage}
      />

      <ProfileForm/>
    </div>
  )
}

export default Settings
