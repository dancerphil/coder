import React, {Suspense, lazy} from 'react'

export const getFileType = (name) => {
  const arr = name.split('.');
  if(arr.length < 2) {
    return 'md';
  }
  return arr[arr.length - 1];
}

export const codeSplit = (dynamicImport, fallback) => {
  const CodeSplit = lazy(dynamicImport)
  return props => (
    <Suspense fallback={fallback}>
      <CodeSplit {...props} />
    </Suspense>
  )
}
