import * as React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '../fontawesome'

export interface Props {
  value?: string
}

export class SearchInput extends React.Component<Props> {
  public render() {
    return (
      <SearchWrap>
        <input
          type="text"
          placeholder="Suche"
          aria-label="Suche"
          value={this.props.value}
        />
        <button className="btn btn-success" type="submit">
          <FontAwesomeIcon icon={['fas', 'search']} />
        </button>
      </SearchWrap>
    )
  }
}

const SearchWrap = styled.form`
  background-color: ${props => props.theme.global.colors.lightblue};
  width: 100%;
  display: flex;
  margin-top: 1rem;
  transition: background-color 0.4s ease;

  &:focus-within {
    background-color: ${props => props.theme.global.colors.green};
  }

  > input {
    color: #fff;
    font-weight: bold;
    width: calc(100% - 3rem);
    background-color: transparent;
    border: 0;
    /* height: 2.5rem; */
    padding-left: 3rem;
    outline: none;
  }

  > input::placeholder {
    color: rgba(255, 255, 255, 0.6);
    outline: none;
  }

  button {
    background-color: rgba(255, 255, 255, 0.3);
    min-width: 2.5rem;
    height: 2.5rem;
    border: 0;
    color: #fff;
    border-radius: 0;
  }

  @media (min-width: ${props => props.theme.md}) {
    width: 7rem;
    position: absolute;
    top: 5.6rem;
    right: 2rem;
    background-color: transparent;
    border-radius: 1.1rem;
    height: 2.2rem;
    margin-top: 0;

    transition: all 0.4s ease;

    &:focus-within {
      width: 12rem;
      input::placeholder {
        opacity: 0;
      }
    }

    > input {
      padding: 0 0 0 0.8rem;
      margin-top: -0.2rem;
    }
    > input::placeholder {
      text-align: right;
      padding-right: 1rem;
      margin-top: -0.1rem;
    }

    button {
      top: 0;
      padding: 0.1rem 0 0 0.1rem;
      min-width: 2.2rem;
      height: 2.2rem;
      border-radius: 1.1rem;
    }
  }

  @media (min-width: ${props => props.theme.lg}) {
    right: 1.7rem;
    margin-top: -0.3rem;
    margin-left: auto;
  }
`
