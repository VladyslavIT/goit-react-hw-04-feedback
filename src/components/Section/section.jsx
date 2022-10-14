import React from 'react';
import PropTypes from 'prop-types';

import { SectionTitle } from './section.styled';

const Section = ({ title, children }) => (
  <>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export { Section };
