import user from '../dataFiles/user.json'
import data from '../dataFiles/data.json'
import friends from '../dataFiles/friends.json'
import transactions from '../dataFiles/transactions.json'
import css from './App.module.css'


import { Section } from './Section/Section'
import {Profile} from './Profile/Profile'
import { Statistics } from './Statistics/Statistics'
import { FriendList} from './FriendList/FriendList'
import {TransactionHistory} from './TransactionHistory/TransactionsHistory'
export const App = () => {
  return (
    <>
       <Section title="Task 1 - Profile" section={css.profile}>
        <Profile user={user} />
      </Section>
      <Section title="Task 2 -Statistics" section={css.statistics}>
        < Statistics stats={data}/>
      </Section>
      <Section title="Task 3 - Friend list" section={css['friend-list']}>< FriendList friends={friends} />
      </Section>
       <Section title="Task 4 - History of transactions"
        section={css['history-of-transactions']}
      >
        <TransactionHistory items={transactions} />
      </Section>
    </>
  );
};
