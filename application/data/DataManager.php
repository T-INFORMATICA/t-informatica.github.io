<?php

class DataManager {
    
    function QueryLeerling($email) {
        $query = "SELECT email, voornaam, achternaam, ct1_klaslid.klas
        FROM ct1_gebruiker 
        INNER JOIN ct1_klaslid ON ct1_gebruiker.email = ct1_klaslid.gebruiker
        WHERE ct1_gebruiker.email = '$email' AND ct1_gebruiker.rol = 'leerling'";

        $conn = Database::Instance()->getConnection();
        $result = $conn->query($query);

        $leerling = null;
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $email = $row["email"];
                $voornaam = $row["voornaam"];
                $achternaam = $row["achternaam"];
                $klas = $row["klas"];
                
                $leerling = new Leerling($email, $voornaam, $achternaam, $klas);
                break;
            }
        }
        return $leerling;
    }

    function QueryLeerlingEvaluaties($leerling) {

        $email = $leerling->GetEmail();

        $query = "SELECT ct1_resultaat.waarde, ct1_resultaat.commentaar, ct1_doelstelling.naam AS doelstellingNaam, ct1_doelstelling.categorie AS onderwerp, ct1_opdracht.datum, ct1_opdracht.naam AS opdracht
        FROM ct1_gebruiker
        INNER JOIN ct1_evaluatie 	ON ct1_gebruiker.email = ct1_evaluatie.leerling
        INNER JOIN ct1_resultaat 	ON ct1_resultaat.waarde = ct1_evaluatie.resultaat AND ct1_resultaat.doelstelling = ct1_evaluatie.doelstelling
        INNER JOIN ct1_doelstelling	ON ct1_doelstelling.naam = ct1_resultaat.doelstelling
        INNER JOIN ct1_opdracht     ON ct1_evaluatie.opdracht = ct1_opdracht.id
        WHERE ct1_gebruiker.email = '$email';";

        $conn = Database::Instance()->getConnection();
        $result = $conn->query($query);

        $evaluaties = array();

        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $doelstellingNaam = $row["doelstellingNaam"];
                $onderwerp = $row["onderwerp"];
                $waarde = $row["waarde"];
                $commentaar = $row["commentaar"];
                $datum = $row["datum"];
                $opdracht = $row["opdracht"];

                $doelstelling = new Doelstelling($doelstellingNaam, $onderwerp);
                $eval = new Evaluatie($doelstelling, $waarde, $commentaar, $datum, $opdracht);
                $evaluaties[] = $eval;
            }
        }
        
        return $evaluaties;
    }

    function QueryLeerlingTermen($leerling) {

        $email = $leerling->GetEmail();

        $query = "SELECT ct1_term.naam AS term, ct1_term.definitie, ct1_doelstelling.naam AS doelstellingNaam, ct1_doelstelling.categorie AS onderwerp
        FROM ct1_gebruiker
        INNER JOIN ct1_geoefendeterm 	ON ct1_gebruiker.email = ct1_geoefendeterm.leerling
        INNER JOIN ct1_term				ON ct1_geoefendeterm.term = ct1_term.naam
        INNER JOIN ct1_hoofdstuk ON ct1_term.hoofdstuk = ct1_hoofdstuk.naam
        INNER JOIN ct1_doelstelling ON ct1_hoofdstuk.doelstelling = ct1_doelstelling.naam
        WHERE ct1_gebruiker.email = '$email';";

        $conn = Database::Instance()->getConnection();
        $result = $conn->query($query);

        $termen = array();

        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $doelstellingNaam = $row["doelstellingNaam"];
                $onderwerp = $row["onderwerp"];
                $term = $row["term"];
                $definitie = $row["definitie"];
                
                $doelstelling = new Doelstelling($doelstellingNaam, $onderwerp);
                $term = new Term($term, $definitie, $doelstelling);

                $termen[] = $term;
            }
        }

        return $termen;
    }

    function QueryTermen() {
        $query = "SELECT ct1_term.naam, ct1_term.definitie, ct1_doelstelling.naam AS doelstellingNaam, ct1_doelstelling.categorie AS onderwerp
        FROM ct1_term
        INNER JOIN ct1_hoofdstuk ON ct1_term.hoofdstuk = ct1_hoofdstuk.naam
        INNER JOIN ct1_doelstelling ON ct1_hoofdstuk.doelstelling = ct1_doelstelling.naam;";

        $conn = Database::Instance()->getConnection();
        $result = $conn->query($query);

        $termen = array();

        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $doelstellingNaam = $row["doelstellingNaam"];
                $onderwerp = $row["onderwerp"];
                $naam = $row["naam"];
                $definitie = $row["definitie"];

                $doelstelling = new Doelstelling($doelstellingNaam, $onderwerp);
                $term = new Term($naam, $definitie, $doelstelling);

                $termen[] = $term;
            }
        }

        return $termen;
    }
}