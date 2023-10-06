// gkc_hash_code : 01GYEA5P94ZESFA5FHPKT5GFMJ
import React from 'react';

declare module 'react' {
  function forwardRef<T, P = {}>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null,
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}
