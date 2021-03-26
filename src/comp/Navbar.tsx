import { styles } from "../styles/styles";

export const Navbar: React.FC = () => {
  return (
    <div className="nav flexNav" style={styles.nav}>
      <i className="fab fa-asymmetrik"></i>
      <i className="fas fa-bars"></i>
    </div>
  );
};
