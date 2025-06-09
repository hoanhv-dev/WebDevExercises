import { useSelector } from 'react-redux';

import { getLoaderState } from '@storage/selectors/loaderSelector';

import './style.scss';

const LoadingIndicator = () => {
  const { isLoading } = useSelector(getLoaderState);
  return isLoading ? (
    <div className='loader-container'>
      <div className='lds-spinner'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  ) : null;
};

export default LoadingIndicator;
