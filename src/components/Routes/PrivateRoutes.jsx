import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { getIsLogin } from "redux/auth/auth-selectors";
import { useEffect } from 'react';
import { current } from '../../redux/auth/auth-operations.js';
import { fetchCategories } from '../../redux/categories/categories-operations.js';

const PrivateRoutes = () => {
  const isLogin = useSelector(getIsLogin);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogin) {
      dispatch(fetchCategories());
    } else {
      navigate('/');
    }
  }, [dispatch, isLogin, navigate]);

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return <Outlet />;
};

export default PrivateRoutes;
