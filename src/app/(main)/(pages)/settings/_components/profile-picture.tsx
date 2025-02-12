'use client'
import React, { useEffect, useState } from 'react'
import UploadCareButton from './uploadcare-button'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import Image from 'next/image'

type Props = {
  userImage: string | null
  onDelete?: any
  onUpload: any
}

const ProfilePicture = ({ userImage, onDelete, onUpload }: Props) => {
  const router = useRouter()
  const [imageSrc, setImageSrc] = useState(userImage)

  useEffect(() => {
    setImageSrc(userImage)
  }, [userImage])
  

  const onRemoveProfileImage = async () => {
    const response = await onDelete()
    if (response) {
      router.refresh()
      setImageSrc('')
    }
  }
  console.log("Imagem do usuário:", userImage)

  return (
    <div className="flex flex-col">
      <p className="text-lg text-white"> Profile Picture</p>
      <div className="flex h-[30vh] flex-col items-center justify-center">
        {userImage ? (
          <>
            <div className="relative h-full w-2/12">
              <Image
                key={userImage}
                src={userImage}
                alt="User_Image"
                fill
              />
            </div>
            <Button
              onClick={onRemoveProfileImage}
              className="bg-transparent text-white/70 hover:bg-transparent hover:text-white"
            >
              <X /> Remove Logo
            </Button>
          </>
        ) : (
          <UploadCareButton onUpload={onUpload} />
        )}
      </div>
    </div>
  )
}

export default ProfilePicture