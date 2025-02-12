'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { FileUploaderRegular } from '@uploadcare/react-uploader'
import '@uploadcare/react-uploader/core.css'
import * as UC from '@uploadcare/file-uploader'
import { loadFileUploaderFrom } from '@uploadcare/file-uploader/abstract/loadFileUploaderFrom.js';

loadFileUploaderFrom('https://cdn.jsdelivr.net/npm/@uploadcare/file-uploader@v1/web/file-uploader.iife.min.js').then(
  (UC) => {
    if (!UC) {
      return; // To avoid errors in SSR case
    }

    // Now you can realize your logic, e.g.:
    const uploader = new UC.FileUploaderRegular();
    document.body.appendChild(uploader);
  }
);



UC.defineComponents(UC)

type Props = {
  onUpload: (e: string) => any
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
