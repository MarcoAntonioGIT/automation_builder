'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { FileUploaderRegular } from '@uploadcare/react-uploader/next'
import '@uploadcare/react-uploader/core.css'

type Props = {
  onUpload?: (url: string) => Promise<void>
}

const UploadCareButton = ({ onUpload }: Props) => {
  const router = useRouter()

  const handleUpload = async (e: any) => {
    if (e.cdnUrl && onUpload) {
      await onUpload(e.cdnUrl)
      router.refresh()
    }
  }

  return (
    <div>
      <FileUploaderRegular
        sourceList="local"
        classNameUploader="uc-dark"
        pubkey="0812e337f09c61817512"
        onChange={handleUpload} // Adiciona evento diretamente
      />
    </div>
  )
}

export default UploadCareButton
