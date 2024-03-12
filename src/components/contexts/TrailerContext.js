import React from 'react';
import { useSelector } from 'react-redux';

export const TrailerContext = React.createContext();

export function TrailerProvider({children, sampleId, fetchTrailer}) {
  fetchTrailer(sampleId);
  let trailer = useSelector((store) => store.trailer.trailer);

  return (
    <TrailerContext.Provider value={trailer}>
      {children}
    </TrailerContext.Provider>
  )
};