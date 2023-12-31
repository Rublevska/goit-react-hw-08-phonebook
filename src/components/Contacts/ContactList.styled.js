import styled from 'styled-components';

export const ListOfContacts = styled.ul`
  padding: ${p => p.theme.spasing(4)};
  margin-left: auto;
  margin-right: auto;
  box-shadow: ${p => p.theme.shadows.formShadow};
  border-radius: ${p => p.theme.radii.sd};

  display: flex;
  flex-wrap: wrap;
  column-gap: ${p => p.theme.spasing(7)};
`;

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContactItem = styled.li`
  padding-bottom: ${p => p.theme.spasing(4)};
  flex-basis: calc((100% - 2 * ${p => p.theme.spasing(7)}) / 3);
`;
