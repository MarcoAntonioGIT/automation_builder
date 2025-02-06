import { div } from 'framer-motion/client'
import React from 'react'
import UploadCareButton from './uploadcare-button'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

type Props = {}

const ProfilePicture = (props: Props) => {
  const router = useRouter()
  const onRemoveProfileImage = async () =>{
    const response = await onDelete()
    if(response){
      router.refresh()
    }
  }
  return <div className='flex flex-col'>
    <p className='text-lg text-white'>Foto de Perfil</p>
    <div className='flex h-[30vh] flex-col items-center justify-center'>
      {userImage ? (
        <>
          <div className='relative h-full w-2/12'>
            <Image
              src={userImage}
              alt="User_Image"
              fill              
            />
          </div>
          <Button 
            onClick={onRemoveProfileImage}
            className="bg-transparent text-white/70 hover:bg-transparent hover:text-white"
          >
            <X/>Remover Logo
          </Button>
        </>
      ) : (
        <UploadCareButton/>
      )}
    </div> 
  </div>
}

export default ProfilePicture