import { 
  Detail, 
  Input, 
  List, 
  ListItem, 
  Nav, 
  NavAnchor, 
  Search, 
  Siderbar, 
  Title 
} from "./styles"
import { Form, Outlet, useLoaderData, useNavigation, useSubmit } from "react-router-dom";
import { Contact, LoaderData } from "./types";
import GlobalStyle from "@assets/styles/RouterTutorial/GlobalStyle";
import { useEffect, useRef } from "react";

export const Root = () => {
  const { contacts, q } = useLoaderData() as LoaderData;
  const navigation = useNavigation();
  const submit = useSubmit();
  const questRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!questRef.current?.value) return;
    questRef.current.value = q || '';
  }, [q]);
  return (
    <>
      <GlobalStyle />
      <Siderbar>
        <Title>React Router Contacts</Title>
        <Search>
          <Form role="search">
            <Input 
              ref={questRef}
              id="q"
              type="search"
              name="q"
              placeholder="Search"
              defaultValue={q}
              onChange={(event) => {
                const isFirstSearch = q == null;
                submit(event.currentTarget.form, {
                  replace: !isFirstSearch
                });
              }}
            />
            <div></div>
            <div></div>
          </Form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </Search>
        <Nav>
          {contacts.length > 0 ? (
            <List>
              {contacts.map((contact:Contact) => (
                <ListItem 
                  id={contact.id}
                  key={contact.id}
                >
                  <NavAnchor
                    to={`contacts/${contact.id}`}
                    className={({isActive, isPending}) => 
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{' '}
                    {contact.favorite && <span>★</span>}
                  </NavAnchor>
                </ListItem>
              ))}
            </List>
          ):(
            <p>
              <i>No Contacts</i>
            </p>
          )}
        </Nav>
      </Siderbar>
      <Detail
        className={
          navigation.state === "loading" ? "loading" : "" 
        }
      >
        <Outlet />
      </Detail>
    </>
  )
}