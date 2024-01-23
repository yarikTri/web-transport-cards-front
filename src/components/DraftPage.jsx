// DraftPage.jsx

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useCustomNavigate } from '../modules/redirect'

import NavbarAnyMetro from './Navbar';
import Header from './Header';

import '../style/DraftPage.css'

import { getDraft, deleteRouteFromDraft, formDraft, deleteDraft } from '../actions/draftActions'

const DraftTicketTable = ({ draft }) => {  
    const navigate = useCustomNavigate();
    const dispatch = useDispatch();

    const handleRemoveRoute = (id) => {
      dispatch(deleteRouteFromDraft(id));
    };

    const handleFormDraft = async () => {
        await dispatch(formDraft());
        navigate('/tickets');
    };

    const handleDeleteDraft = async () => {
      await dispatch(deleteDraft());
      navigate('/tickets');
    };
  
    return (
      <div className='draft-container'>
        <div className='draft-title'>Черновая заявка</div>
        <table className="table-bordered">
          <thead>
            <tr>
              <th>Маршрут</th>
              <th>Станции</th>
              <th>Режим работы</th>
              <th>Описание</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {draft.draftItems.map((route) => (
              <tr key={route.id}>
                  <td>{route.name}</td>
                  <td>{route.start_station} - {route.end_station}</td>
                  <td>{route.start_time} - {route.end_time}</td>
                  <td>{route.description}</td>
                  <td>
                    <button className='del-draft-button' onClick={() => handleRemoveRoute(route.id)}>Удалить</button>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="buttons-container">
          <button className='del-draft-button main-draft-button' onClick={handleDeleteDraft}>Удалить заявку</button>
          <button className='accept-draft-button main-draft-button' onClick={handleFormDraft}>Сформировать заявку</button>
        </div>
      </div>
    );
  };

const DraftPage = () => {
  const user = useSelector((state) => state.auth.user);
  const draft = useSelector((state) => state.draft);

  const dispatch = useDispatch();

  const navigate = useCustomNavigate();

  useEffect(() => {
    if (user && !user.is_moderator) {
      dispatch(getDraft(draft.draft_id));
    } else {
      navigate('/routes');
    }
  }, [dispatch]);

  return (
    <div>
      <NavbarAnyMetro />
      <Header showDraft={false} showApp={true}/>
      <div className="applications-container">
        {draft.draft_id !== null && (
          <DraftTicketTable
            draft={draft}
          />
        )}
      </div>
    </div>
  );
};

export default DraftPage;
